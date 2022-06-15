const db = require("quick.db")

//////////////////////////////////////////////
const discord = require('discord.js')

exports.run = async(client, message, args) => {
var kayitkanal = db.fetch(`kayıtlog_${message.guild.id}`)
var kanalcık = message.guild.channels.cache.get(kayitkanal)
let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`) 
let text = db.fetch(`kayıttag_${message.guild.id}`)
let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "TR_tr") {
      if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(` Bu Komudu Kullanabilmen İçin  Adlı Role Sahip olman Lazım  !  You Need To Have The Role Named Sa Before You Can Use This Command!`)
      if(message.channel.id !== kanal) return message.channel.send(` Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin ! `)
      if (!kızrol) return message.channel.send(` Sunucuda Kız Rolü Ayarlanmadığı İçin Komut Kullanılamaz ! `)
      let member = message.mentions.members.first();
      if (!member) return message.channel.send(`Kız Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin ! `)
      let isim = args[1]
      if (!isim) return message.channel.send(`İsmini Belirtmelisin ! `)
      let yaş = args[2]
      if (!yaş) return message.channel.send(` Yaşını Belirtmelisin ! `)
      if(text)  member.setNickname(`${text} ${isim} | ${yaş}`)  
      else member.setNickname(`${isim} | ${yaş}`)
      member.roles.remove(alınacakrol)
      member.roles.add(kızrol) 
      
      const başarılı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Kız Olarak Kayıt Edildi `)
      .setColor('BLACK')
      .setDescription(` Kız Olarak Kayıt Edilen Kullanıcı: ${member} \n Kız Olarak Kayıt Eden Yetkili: <@!${message.author.id}> \n `)
      .addField(`Kullanıcının ismi;`, `${isim}`, true)
      .addField(`Kullanıcının Yaşı;`, `${yaş}`, true)
      .setThumbnail(member.avatarURL)
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      if(!kanalcık) message.channel.send(başarılı)
      kanalcık.send(başarılı)
      db.add(`kızkayıt_${message.author.id}`, 1)
      db.add(`toplamkayıt_${message.author.id}`, 1) // türkçe

    }else{
      if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`You Need To Have The Role Named <@&${kayıtçı}> Before You Can Use This Command!`)
      if(message.channel.id !== kanal) return message.channel.send(`You Can Only Use This Command On Channel <#${kanal}>! `)
      if (!kızrol) return message.channel.send(` Command Cannot Be Used Because The Girl Role Is Not Set On The Server ! `)
      let member = message.mentions.members.first();
      if (!member) return message.channel.send(`You Must Specify The User You Will Register As A Girl ! `)
      let isim = args[1]
      if (!isim) return message.channel.send(`You must specify your name ! `)
      let yaş = args[2]
      if (!yaş) return message.channel.send(` You must indicate your age ! `)
      if(text)  member.setNickname(`${text} ${isim} | ${yaş}`)  
      else member.setNickname(`${isim} | ${yaş}`)
      member.roles.remove(alınacakrol)
      member.roles.add(kızrol) 
      
      const başarılı = new discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Registered as a Girl `)
      .setColor('BLACK')
      .setDescription(` User Registered as Girl: ${member} \ n Authorized Registered as Girl: <@!${message.author.id}> \ n `)
      .addField(`User's name;`, `${isim}`, true)
      .addField(`User's Age;`, `${yaş}`, true)
      .setThumbnail(member.avatarURL)
      .setFooter(`The Command ${message.author.tag} Used By ! `)
      if(!kanalcık) message.channel.send(başarılı)
      kanalcık.send(başarılı)
      db.add(`kızkayıt_${message.author.id}`, 1)
      db.add(`toplamkayıt_${message.author.id}`, 1) // ingilizce
    }
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k',"g","girl"],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}