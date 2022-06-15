const Discord = require('discord.js');
const db = require('quick.db')
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

let kanal = message.mentions.channels.first() 
let sayı = args[1]
let kalan = args[1] - message.guild.memberCount
if(dil == 'tr' || dil == undefined) {
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply(mesajtr.adminnoperm);
 if(!kanal) return message.inlineReply(` **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal Sayı>\``)
 if(isNaN(args[1])) return message.inlineReply(`  **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal Sayı>\``)
 if(message.guild.memberCount > args[1]) return message.inlineReply(` **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal Sayı>\``)
  message.inlineReply(`╔▬▬▬▬▬▬▬▬Sayaç▬▬▬▬▬▬▬▬▬
║►  Sayaç Aktif Edildi.
║►  **${args[1]}** Olarak Güncelledim! 
║►  Sayaç Kanalını **${kanal}** Olarak Güncelledim! 
║►  ${args[1]} Kişi Olmaya Son  **${kalan}**  Kişi Kaldı!
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`
)
  db.set(`sayacK_${message.guild.id}`, kanal.id)  
  db.set(`sayacS_${message.guild.id}`, sayı) 
}
if (dil == 'en') {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply(mesajen.adminnoperm);
 if(!kanal) return message.inlineReply(` **Please Specify a Channel!** \n**__Example Usage__** : \`${prefix}set-counter #channel Number>\``)
 if(isNaN(args[1])) return message.inlineReply(`  **The number you specified is too small or you have already reached that number!**\n**__Example Usage__** : \`${prefix}set-counter #channel Number>\``)
 if(message.guild.memberCount > args[1]) return message.inlineReply(` **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Example Usage__** : \`${prefix}set-counter #channel Number>\``)
  message.inlineReply(`
╔▬▬▬▬▬▬▬▬Counter▬▬▬▬▬▬▬▬▬
║►  Counter Activated.
║►  **${args[1]}** As Updated!
║►  I Updated the Counter Channel to **${kanal}**!
║►  ${args[1]} No People **${kalan}** People Left!
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`
)
  db.set(`sayacK_${message.guild.id}`, kanal.id)  
  db.set(`sayacS_${message.guild.id}`, sayı) 
}
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ["sayac-ayarla","set-counter"]
  };
  
  exports.help = {
    name: 'sayaç-ayarla',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };