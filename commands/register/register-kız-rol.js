const db = require("quick.db")
//////////////////////////////////////////////
const discord = require('discord.js')


exports.run = async(client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "TR_tr") {
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);
      if(args[0] === "sıfırla") {
      const sıfırlandı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Kız Rol Sıfırla `)
      .setColor('BLACK')
      .setDescription(` Sunucu İçin Ayarladığınız Kız Rolü Başarıyla Sıfırlandı !`)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(sıfırlandı)
      db.delete(`kızrol_${message.guild.id}`)
      return;
      }
      
      let rol = message.mentions.roles.first();   
      if (!rol) {
        const ayarlanmadı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Kız Rol Ayarla `)
      .setColor('BLACK')
      .setDescription(` Ayarlayacağınız Kız Rolünü Belirtiniz ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlanmadı)
      }
      db.set(`kızrol_${message.guild.id}`, rol.id)
      const ayarlandı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)  
      .setTitle(`${client.user.username} - kız Rol Ayarlandı `)
      .setColor('BLACK')
      .setDescription(` Kız Rolü Başarıyla ${rol} Olarak Ayarlandı ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlandı) // türkçe

    }else{
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` You must have "\`Administrator\`" privilege to use this command.`);
      if(args[0] === "reset") {
      const sıfırlandı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Reset Girl Role `)
      .setColor('BLACK')
      .setDescription(` The Girl Role You Set for the Server Successfully Reset!`)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`The Command ${message.author.tag} Used By ! `)
      message.channel.send(sıfırlandı)
      db.delete(`kızrol_${message.guild.id}`)
      return;
      }
      
      let rol = message.mentions.roles.first();   
      if (!rol) {
        const ayarlanmadı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Set Girl Role `)
      .setColor('BLACK')
      .setDescription(` Specify the Girl Role You Will Set ! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`The Command ${message.author.tag} Used By! `)
      message.channel.send(ayarlanmadı)
      }
      db.set(`kızrol_${message.guild.id}`, rol.id)
      const ayarlandı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)  
      .setTitle(`${client.user.username} - Girl Role Set `)
      .setColor('BLACK')
      .setDescription(` Girl Role Successfully ${rol} Set To! `)
      .setThumbnail(client.user.avatarURL)
      .setFooter(`The Command ${message.author.tag} Used By ! `)
      message.channel.send(ayarlandı) // ingilizce
    }  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kızrol', 'girl-role', 'k-rol'],
  permlevel: 0
}
exports.help = {
  name: 'kız-rol',
  description: 'kız rolünü ayarlar',
  usage: '!kız-rol @rol'
}