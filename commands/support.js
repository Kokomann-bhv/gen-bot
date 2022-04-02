const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Support')
	.setDescription(`This bot is coded BY  on discord. \n Dm me on discord if you want to buy anything`)
.setImage("https://cdn.discordapp.com/attachments/846707654164480020/885591400039714866/standard.gif")


message.channel.send(embed);
}
module.exports.help = {
  name: 'support'
}