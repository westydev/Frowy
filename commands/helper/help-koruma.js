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
.setTitle(` **Welcome To Frowy Bot Guard Menu** `)
.setDescription(`
**» ${prefix}ban-protection #channel**  You Set the Ban Protection System.
**» ${prefix}ban-protection-reset**  Resets the set Ban Protection System.
**» ${prefix}channel-protection #channel** You Set the Channel Protection System.
**» ${prefix}channel-protection-reset** Resets the Tuned Channel Protection System.
**» ${prefix}role-protection #channel ** You Set Role Protection System.
**» ${prefix}role-protection-reset **  Resets the set Role Protection System.
`)
message.inlineReply(embed)
 }
 
 if(dil == 'tr' || dil == undefined) {
    let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Frowy Bot Koruma Menüsüne Hoşgeldiniz.** `)
.setDescription(`
**» ${prefix}ban-koruma #kanal**  Ban Koruma Sistemini Ayarlarsınız.
**» ${prefix}ban-koruma-sıfırla **  Ayarlanan Ban Koruma Sistemini Sıfırlar.
**» ${prefix}kanal-koruma #kanal** Kanal Koruma Sistemi Ayarlarsınız.
**» ${prefix}kanal-koruma-sıfırla** Ayarlanan Kanal Koruma Sistemini Sıfırlar.
**» ${prefix}rol-koruma #kanal ** Rol Koruma Sistemi Ayarlarsınız.
**» ${prefix}rol-koruma-sıfırla **  Ayarlanan Rol Koruma Sistemini Sıfırlar.
`)
.setImage("https://cdn.discordapp.com/attachments/867075670626533407/879665274075381760/standard.gif")
message.inlineReply(embed)
 }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['koruma-yardım',"guard"],
  permLevel: 0,
};

exports.help = {
  name: 'koruma-sistemi',
  description: 'Botun Koruma Menüsünü Gösterir.',
  usage: 'guard'
};
