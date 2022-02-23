require('dotenv').config()

const express = require('express');
const app = express();
app.get('/', (req, res) => {
		res.send('Your discord bot is online ^^')
})
app.listen(3000, () => {
  console.log("Your discord bot is running..." )
});
const axios = require("axios");
const mainURL = 'http://api.brainshop.ai/get'
const encodeURL = {
	bid: encodeURIComponent(process.env.BRAIN_ID),
	key: encodeURIComponent(process.env.BRAIN_KEY),
	uid: null, msg: null
};

const Discord = require('discord.js');
const { Client, Collection } = require('discord.js');
const client = new Client({
	intents: ["GUILDS","GUILD_MESSAGES"]
});

const { readdirSync } = require("fs");

const activity = ["memes battle","protect cute Cheem"]
client.on('ready', () => {
	console.log('Bot is online');
	setInterval(()=>{
		const randoms = Math.floor(Math.random()*(activity.length-1)+1)
		client.user.setActivity(activity[randoms],{type:"PLAYING"})
	},3000)
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();
client.category = readdirSync("./src");
["command"].forEach(handler=>{
	require(`./setup/${handler}`)(client);
});

client.on('messageCreate',async(message)=>{
	if(message.guild.id==process.env.MAIN_SERVER_ID){
		if(message.channel.id == process.env.MAIN_CHAT_ID){
			if(!message.author.bot&&message.mentions.members.first()==undefined){
				if(message.content.length>0){
					async function AIrepMsg(uid, msg){
						setInterval(() => {
							encodeURL.uid = encodeURIComponent(uid);
							encodeURL.msg = encodeURIComponent(msg);
						})
						let pathURL = `?bid=${encodeURL.bid}&key=${encodeURL.key}&uid=${encodeURL.uid}&msg=${encodeURL.msg}`
						await axios.get(`${mainURL}${pathURL}`).then(response => {
							message.channel.sendTyping()
							return setTimeout(()=>message.reply(response.data.cnt),3000)
						})
					}
					AIrepMsg(message.author.id, message.content)
				} else {
					setTimeout(() => {
						message.reply('Hmmm 🤔')
					},3000)
				}
			}
		}
	}
	let args = message.content.slice(process.env.PREFIX.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();
	if(cmd.length===0) return;
	let command = client.commands.get(cmd);
	if(!command) command = client.commands.get(client.aliases.get(cmd))
	if(command) command.run(client,message,args,process.env.PREFIX);
	// if(message.author.id!==client.user.id) console.log(`${message.member.user.tag} use: ${message.content}`)
})
client.login(process.env.TOKEN);