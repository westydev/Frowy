const db = require("quick.db")
const discord = require('discord.js')

////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs

exports.run = async(client, message, args) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(mesajtr.adminnoperm)
    if(args[0] === "sıfırla") {
    const sıfırlandı = new discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())  
    .setTitle(`${client.user.username} - Hoş Geldin Kanalını Sıfırla`)
    .setColor('BLACK')
    .setDescription(`Hoş Geldin Kanal Başarıyla Sıfırlandı ! `)
    .setThumbnail(client.user.avatarURL)
    .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
    message.channel.send(sıfırlandı)
    db.delete(`kayıthg_${message.guild.id}`)
    return;
    }
    
    let kanal = message.mentions.channels.first();   
    if (!kanal) {
      const ayarlanmadı = new discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())  
    .setTitle(`${client.user.username} - Hoş Geldin Kanal Ayarla `)
    .setColor('BLACK')
    .setDescription(` Hoş Geldin  Kanalı Belirtiniz !  `)
    .setThumbnail(client.user.avatarURL())
    .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
    message.channel.send(ayarlanmadı)
    }
    db.set(`kayıthg_${message.guild.id}`, kanal.id)
    const ayarlandı = new discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())  
    .setTitle(`${client.user.username} - Hoş Geldin Kanal Ayarlandı `)
    .setColor('BLACK')
    .setDescription(` Hoş Geldin Kanalı ${kanal} Olarak Ayarlandı ! `)
    .setThumbnail(client.user.avatarURL())
    .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
    message.channel.send(ayarlandı) 
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["registration-welcome","reg-wel"],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-hg',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: '!kayıt-kanal #kanal'
}