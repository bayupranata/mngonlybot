const Discord = module.require('discord.js');
var rules1 = new Discord.RichEmbed()
        .setTitle("MEDIA SOSIAL MNG ONLY")
.setDescription(`
<:MNG:689360259252224000>
<:LINK:749903822343635088> [Link Discord](https://discord.gg/33her3k)  | <:YT:749901205408579746> [Youtube](https://www.youtube.com/channel/UCj3PVvdibv1Wcq53JOANUXw)  | <:IG:749901204280311869>  [Instagram](https://www.instagram.com/mngonly)
`, true)

        .setColor("2F3136")


module.exports.run = async (bot, message, args) => {
//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time


            message.channel.send(rules1)

              .then(function (message) {
                message.react("660382034203770880")
              })
}
exports.help = {
  name: "rules",
  description: "DM Someone",
  usage: "help"
}