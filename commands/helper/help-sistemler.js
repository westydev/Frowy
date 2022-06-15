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
//db config
var dil = db.fetch(`lang_${message.guild.id}`)
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
//db config
///En Command
if(dil == 'en') {
    let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Welcome to Frowy Bot Systems Menu** `)
.setDescription(`
**Counter system**
**${prefix}set-counter** You set the counter | **${prefix}set-counter #channel target**
**${prefix}counter reset** Reset The Counter.

**Modlog System**
**${prefix}modlog** You Set Modlog | Example Usage : **${prefix}modlog #channel**
**${prefix}modlog close** You reset the Modlog.
`)
message.inlineReply(embed)
 }
 /// En Command
 /// Tr Command
 if(dil == 'tr' || dil == undefined) {
    let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Frowy Botun Sistemler Menüsüne Hoşgeldiniz** `)
.setDescription(`
**Sayaç Sistemi**
**${prefix}sayaç-ayarla** Sayaç ayarlarsınız | Örnek Kullanım : **${prefix}sayaç-ayarla #kanal hedef**
**${prefix}sayaş sıfırla** Ayarladığınız Sayaçı Sıfırlarsınız.

**Modlog Sistemi**
**${prefix}modlog** Modlog Ayarlarsınız | Örnek Kullanım : **${prefix}modlog #kanal**
**${prefix}modlog sıfırla** Modlog Sıfırlarsınız.
`)
.setImage("https://cdn.discordapp.com/attachments/867075670626533407/879665274075381760/standard.gif")
message.inlineReply(embed)
 }
 /// Tr Command
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sistemler-yardım',"system","systems"],
  permLevel: 0,
};

exports.help = {
  name: 'sistemler',
  description: 'Botun Sistemler Menüsünü Gösterir.',
  usage: 'yardım'
};
