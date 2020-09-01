const Discord = require('discord.js');
exports.run = (client, message, args) => {
	var m = args.join(' ');
  message.delete()
	if (!m) return message.reply('Isi teks apapun.');
	const embed = new Discord.RichEmbed()
		.setDescription(m)
		.setColor(["#ff0000"])
    .setFooter(`MNG ONLY`);
	message.channel.send({ embed });
};

exports.help = {
  name: "embed",
  description: "DM Someone",
  usage: "help"
}