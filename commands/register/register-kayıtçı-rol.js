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
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(mesajtr.adminnoperm);
      if(args[0] === "sıfırla") {
      let sıfırlandı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)  
      .setTitle(`${client.user.username} - Kayıtçı Rol Sıfırla `)
      .setColor('BLACK')
      .setDescription(` Sunucu İçin Ayarladığınız Kayıtçı Rol Başarıyla Sıfırlandı ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(sıfırlandı)
      db.delete(`kayıtçırol_${message.guild.id}`)
      return;
      }
      
      let rol = message.mentions.roles.first();   
      if (!rol) {
        let ayarlanmadı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Kayıtçı Rol Ayarla `)
      .setColor('BLACK')
      .setDescription(` Ayarlayacağınız Kayıtçı Rolü Belirtiniz ! `)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlanmadı)
      }
      db.set(`kayıtçırol_${message.guild.id}`, rol.id)
      let ayarlandı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)  
      .setTitle(`${client.user.username} - Kayıtçı Rol Ayarlandı `)
      .setColor('BLACK')
      .setDescription(`Kayıt Edecek Rol Başarıyla ${rol} Olarak Ayarlandı ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlandı)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıt-yetkili', 'reg-auth','registration-authorized'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-rol',
  description: 'kız rolünü ayarlar',
  usage: 'dr!kız-rol @rol'
}