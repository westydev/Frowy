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
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(mesajtr.adminnoperm);
      if(args[0] === "sıfırla") {
      const sıfırlandı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} Alınacak Rolü Sıfırla `)
      .setColor('BLACK')
      .setDescription(` Kayıt Olunca Otomatik Alınacak Rol Sıfırlandı ! `)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(sıfırlandı)
      db.delete(`alınacakrol_${message.guild.id}`)
      return;
      }
      let rol = message.mentions.roles.first();   
      if (!rol) {
        const ayarlanmadı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username}  Alınacak Rolü Ayarla `)
      .setColor('BLACK')
      .setDescription(` Kayıt Olunca Alınacak Rolü Belirtiniz ! `)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlanmadı)
      }
      db.set(`alınacakrol_${message.guild.id}`, rol.id)
      const ayarlandı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username}  Alınacak Rol Ayarlandı `)
      .setColor('BLACK')
      .setDescription(` Kayıt Olunca Otomatik Alınacak Rol Başarıyla ${rol} Olarak Ayarlandı ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlandı)
  }
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['alınacakrol', 'arol', 'a-rol'],
  permlevel: 0
}
exports.help = {
  name: 'alınacak-rol',
  description: 'Kayıt Olunca Alınacak Rolü Ayarlar',
  usage: 'alınacak-rol @rol'
}