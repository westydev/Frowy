const db = require("quick.db")

//////////////////////////////////////////////
const discord = require('discord.js')
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
var kayitkanal = db.fetch(`kayıtlog_${message.guild.id}`)
var kanalcık = message.guild.channels.cache.get(kayitkanal)
let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let text = db.fetch(`kayıttag_${message.guild.id}`)
      if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım ! `)
      if(message.channel.id !== kanal) return message.channel.send(` Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin ! `)
      if (!erkekrol) return message.channel.send(`Sunucuda Erkek Rolü Ayarlanmadığı İçin Komut Kullanılamaz ! `)
      let member = message.mentions.members.first();
      if (!member) return message.channel.send(` Erkek Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin ! `)
      let isim = args[1]
      if (!isim) return message.channel.send(` İsmini Belirtmelisin ! `)
      let yaş = args[2]
      if (!yaş) return message.channel.send(` Yaşını Belirtmelisin ! `)
      if(text)  member.setNickname(`${text} ${isim} | ${yaş}`)  
      else member.setNickname(`${isim} | ${yaş}`)
      member.roles.remove(alınacakrol)
      member.roles.add(erkekrol)
      
      const başarılı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username}  Erkek Olarak Kayıt Edildi `)
      .setColor('BLACK')
      .setDescription(` Erkek Olarak Kayıt Edilen Kullanıcı: ${member} \n Erkek Olarak Kayıt Eden Yetkili: <@!${message.author.id}> \n `)
      .addField(`Kullanıcının İsmi;`, `${isim}`, true)
      .addField(`Kullanıcının Yaşı;`, `${yaş}`, true)
      .setThumbnail(member.avatarURL)
      .setFooter(` Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      if(!kanalcık) message.channel.send(başarılı)
      kanalcık.send(başarılı)
      db.add(`erkekkayıt_${message.author.id}`, 1)
      db.add(`toplamkayıt_${message.author.id}`, 1) // türkçe
  }
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e',"male"],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
  description: 'erkek olarak kayıt eder',
  usage: 'dr!erkek @kullanıcı isim yaş'
}