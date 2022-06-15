const db = require("quick.db")
const Discord = require('discord.js');
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
exports.run = async(client, message, args) => {
var dil = db.fetch(`lang_${message.guild.id}`)
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

if(dil == 'en') {
    let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Welcome to Frowy Bot Help Menu** `)
.setDescription(`
**» ${prefix}moderation** Shows Moderation Commands.
**» ${prefix}configs** Shows Bot's Settings Menu.
**» ${prefix}systems** Shows Bot's System Menu.
**» ${prefix}guard** Shows Bot's Guard Menu.
**» ${prefix}bot** Shows Bot's Bot Help Menu.

`)
message.inlineReply(embed)
 }
 
 if(dil == 'tr' || dil == undefined) {
    let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Frowy Botun Yardım Menüsüne Hoşgeldiniz** `)
.setDescription(`
**» ${prefix}moderasyon-yardım** ${client.commands.get("moderasyon").help.description}
**» ${prefix}ayarlar-yardım** ${client.commands.get("help-config").help.description}
**» ${prefix}sistemler-yardım** ${client.commands.get("sistemler").help.description}
**» ${prefix}koruma-yardım**  ${client.commands.get("koruma-sistemi").help.description}
**» ${prefix}bot-yardım** ${client.commands.get("botyrd").help.description}
**» ${prefix}kullanıcı-yardım** ${client.commands.get("kullanıcı").help.description}
**» ${prefix}kayıt-yardım** ${client.commands.get("kayıt-sistemi").help.description}
`)
.setImage("https://cdn.discordapp.com/attachments/867075670626533407/879665274075381760/standard.gif")
message.inlineReply(embed)
 }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y',"help"],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'Help Command',
  usage: 'yardım'
};
 