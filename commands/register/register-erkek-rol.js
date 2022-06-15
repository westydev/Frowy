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
   
 if(dil == 'tr' || dil == undefined) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(mesajtr.adminnoperm)

      if(args[0] === "sıfırla") {
        let sıfırlandı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)  
      .setTitle(`${client.user.username} - Erkek Rol Sıfırla `)
      .setColor('BLACK')
      .setDescription(` Sunucu İçin Ayarladığınız Erkek Rolü Başarıyla Sıfırlandı !`)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(sıfırlandı)
      db.delete(`erkekrol_${message.guild.id}`)
      return;
      }
      
      let rol = message.mentions.roles.first();   
      if (!rol) {
        let ayarlanmadı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Erkek Rol Ayarla `)
      .setColor('BLACK')
      .setDescription(`Ayarlayacağınız Erkek Rolünü Belirtiniz ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlanmadı)
      }
      db.set(`erkekrol_${message.guild.id}`, rol.id)
      let ayarlandı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Erkek Rol Ayarlandı `)
      .setColor('BLACK')
      .setDescription(` Erkek Rolü Başarıyla ${rol} Olarak Ayarlandı ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlandı) // türkçe
    }
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['erkekrol', 'male-rol', 'e-rol'],
  permlevel: 0
}
exports.help = {
  name: 'erkek-rol',
  description: 'erkek rolünü ayarlar',
  usage: '!erkek-rol @rol'
}