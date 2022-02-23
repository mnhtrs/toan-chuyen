const cheerio = require('cheerio')
const request = require('request-promise');
const { MessageEmbed } = require('discord.js')
module.exports={
	name:"generate",
	category:"fun",
	description:"Generate Memes",
	aliases:['gen','genr'],
	run:async(client,message,args,prefix)=>{
		const memeURL = 'http://apimeme.com/'
		if(!args[0]) return message.reply(`Use \`${prefix}generate help\` to view the list of memes.`)
		if(args[0] === 'help'){
			args[1] = (!isNaN(args[1]) && args[1]) || 1
			if(Number(args[1]) < 30){
				request(`${memeURL}?page=${args[1]}`,(err,res,html)=>{
					if(!err && res.statusCode == 200){
						const $ = cheerio.load(html)
						let memeItems = [];
						$('div.col-lg-12>a').each((ind,el)=>memeItems.push(`\`${$(el).children('div:last-child').text()}\``));
						const memeName = memeItems.join('**,**')
						const memesHelp = new MessageEmbed()
						.setTitle('Memes Generator Help')
						.setDescription(`__**USAGE:**__ ${prefix}generate [name] [Top text], [Bottom text]\n\n${memeName}`)
						.setFooter(`Page ${Number(args[1])} / 29`)
						message.reply({ embeds: [memesHelp] })
					} else { message.channel.send(err) }
				})
			} else {
				message.reply(`Hey, page \`${args[1]}\` doesn't exist. There are only \`29\` pages.`)
			}
		} else {
			if(args[0].length > 0){
				try {
					let text = args.join(' ').split(',')
					let text_top =  encodeURIComponent(text[1] || 'Top text')
					let text_bottom = encodeURIComponent(text[2] || 'Bottom text')
					text[0] = encodeURIComponent(text[0])
					const meme = new MessageEmbed()
					.setAuthor({ name: `${message.member.user.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
					.setImage(`${memeURL}meme?meme=${text[0]}&top=${text_top}&bottom=${text_bottom}`)
					message.reply({ embeds: [meme] })
				} catch(err) {
					message.channel.send(err)
				}
			} else {
				message.reply(`Use \`${prefix}generate help\` to view the list of memes.`)
			}
		}
	}
}