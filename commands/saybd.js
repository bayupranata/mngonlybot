const Discord = require("discord.js");
const client = new Discord.Client({
    fetchAllMembers: true,
    disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
    disableEveryone: true 
});
const moment = require("moment");
require ("moment-duration-format")

module.exports.run = async (client, message, args) => {
    const sayMessage = args.join(" ");
    let servIcon = message.guild.iconURL;
    let Embed = new Discord.RichEmbed()
    .setColor("#2F3136")
    .setDescription(`${sayMessage}`)
    const Message = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(Embed);
}
exports.help = {
  name: "saybd",
  description: "DM Someone",
  usage: "help"
}