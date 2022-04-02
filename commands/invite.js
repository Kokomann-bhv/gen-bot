const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Invite Me')
	.setDescription(`Want to have the same bot as mine in you server? \n Here is the invite link! \n https://discord.com/api/oauth2/authorize?client_id=884140129378246657&permissions=8&scope=bot`)
  .setImage("https://cdn.discordapp.com/attachments/846707654164480020/885591400039714866/standard.gif")


message.channel.send(embed);
}
module.exports.help = {
  name: 'invite'
}