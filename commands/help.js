const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Gen Help')
	.setDescription('Available Commands: \n `//Token` \n `//Nitro`  \n `//Disney` \n `//Netflix` \n `//Minecraft` \n `//Origin` \n `//Steam` \n `//Emails` \n `//NordVPN` \n `//Crunchyroll (Broken)` \n `//Invite`\n `//Fortnite`\n `//hq`')

.setTimestamp()
.setImage ("https://cdn.discordapp.com/attachments/846707654164480020/885591400039714866/standard.gif")

message.channel.send(embed);
}
module.exports.help = {
  name: 'help'
}