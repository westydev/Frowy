////////modules
const db = require("quick.db")
const Discord = require('discord.js');
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
exports.run = async (client, message, args) => { 
//db config
var dil = db.fetch(`lang_${message.guild.id}`)
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
//db config
let sayackanal = await db.fetch(`sayacK_${message.guild.id}`)  
if (args[0] === "sıfırla" || args[0] === "kapat") {
  if(!sayackanal) return message.inlineReply(` Sayaç Kanalı Zaten Ayarlı Değil`);
  db.delete(`sayacK_${message.guild.id}`)
 message.inlineReply(`Sayaç Kanalı Sıfırlandı`);
  return
}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayac',"counter"],
    permLevel: 0,
  };
  
  exports.help = {
    name: 'sayaç',
    description: 'Help Command',
    usage: 'yardım'
  };