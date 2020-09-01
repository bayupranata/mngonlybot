const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete()
	const embed = new Discord.RichEmbed()
		.setDescription("**bgsd")
		.setColor("#313338")
    .setFooter(`MNG ONLY`);
	message.channel.send({ embed });
};

exports.help = {
  name: "help",
  description: "DM Someone",
  usage: "help"
}