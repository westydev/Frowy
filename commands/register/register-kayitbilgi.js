const db = require("quick.db")

//////////////////////////////////////////////
const Discord = require('discord.js');
const talkedRecently = new Set();
let botid = ('811238807692771348') 
 
exports.run = async(client, message, args) => { 
let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let text = db.fetch(`kayıttag_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let gif = db.fetch(`kayıtgif_${message.guild.id}`)
let hg = db.fetch(`kayıthg_${message.guild.id}`)
let kayitkanal = db.fetch(`kayıtlog_${message.guild.id}`)
let kontrol = await db.fetch(`dil_${message.guild.id}`);

let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Frowy Bot Kayıt Ayarlar Menüsüne Hoşgeldiniz** `)
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setDescription(`
**Tag** 
${text}
**Kayıt Kanal** 
<#${kanal}>
**Kayıt Hg Kanal** 
<#${hg}>
**Kayıtsız Rol** 
<@&${alınacakrol}>
**Erkek Rol** 
<@&${erkekrol}>
**Kız Rol** 
<@&${kızrol}>
**Kayıtçı Rol** 
<@&${kayıtçı}>
**Kayıt Log** 
<#${kayitkanal}>
**Kayıt Gif** 
${gif}
`) 
return message.channel.send(embed)

  
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayitbilgi'],
  permLevel: 0,
};

exports.help = {
  name: 'kayıt-bilgi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};