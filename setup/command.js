const { Client } = require("discord.js");
const { readdirSync } = require("fs");
const ascii = require("ascii-table")
let table = new ascii("Commands");
table.setHeading("Files","Status");
module.exports=(client)=>{
	readdirSync("./src/").forEach(dir=>{
		const cmds=readdirSync(`./src/${dir}/`).filter(file=>file.endsWith(".js"));
		for(let file of cmds){
			let pull = require(`../src/${dir}/${file}`);
			if(pull.name){
				client.commands.set(pull.name,pull);
				table.addRow(file,"✅ Successful")
			} else{
				table.addRow(file,"❌ Failed");
				continue;
			}
			if(pull.aliases&&Array.isArray(pull.aliases)) pull.aliases.forEach(alias=>client.aliases.set(alias,pull.name));
		}
	});
	console.log(table.toString());
}