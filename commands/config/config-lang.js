const Discord = require('discord.js')
const db = require('quick.db')
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
exports.run = (client, message, args) => {
   var a1 = args[0]
   var a2 = args[1]
   var a3 = args[2]
   var atr = a2 == 'tr' || a2 == 'TR' || a2 == 'Türkçe' || a2 == 'türkçe'
   var ayok = a2 !== 'tr' && a2 !== 'TR' && a2 !== 'Türkçe' && a2 !== 'türkçe' && a2 !== 'en' && a2 !== 'EN' && a2 !== 'English' && a2 !== 'english'
   var aen = a2 == 'en' || a2 == 'EN' || a2 == 'English' || a2 == 'english'
   var dil = db.fetch(`lang_${message.guild.id}`)

   //----------\\Embedler//----------\\

   var tr = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setAuthor(client.user.username)
   .setTitle(`Dil Sistemi`)
   .setTimestamp()
   .setFooter(message.author.tag, message.author.avatarURL());

   var en = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setAuthor(client.user.username)
   .setTitle(`Language System`)
   .setDescription('The language of the bot on your server is **English**')
   .setTimestamp()
   .setFooter(message.author.tag, message.author.avatarURL());

   var hata = new Discord.MessageEmbed()
   .setColor("RED")
   .setTimestamp()
   .setThumbnail('https://cdn.discordapp.com/attachments/850026025530163300/851481478852640778/Dunya.png')
   .setFooter(`${message.author.tag}`, message.author.avatarURL());

   var başarılı = new Discord.MessageEmbed()
   .setColor("GREEN")
   .setTimestamp()
   .setThumbnail('https://cdn.discordapp.com/attachments/850026025530163300/851481478852640778/Dunya.png')
   .setFooter(`${message.author.tag}`, message.author.avatarURL());


   //----------\\Komutlar//----------\\

if(!message.member.hasPermission("ADMINISTRATOR")) {
  if(dil == undefined || dil == 'tr') {
    hata.setTitle("Hata!")
    hata.setDescription(mesajtr.adminnoperm)
  }
  else if(dil == 'en') {
    hata.setTitle("Error!")
    hata.setDescription(mesajen.adminnoperm)
  }
  message.channel.send(hata)
  return;
}

   if(a1 == 'set') {
     if(ayok) {
       if(dil == 'en') {
         hata.setTitle('Error!')
         hata.setDescription(`
         No such language was found. Here are the languages you can use:
         
         \`tr\` = Türkçe
         \`en\` = English
         `)
         message.channel.send(hata)
       } else if(dil == 'tr' || dil == undefined) {
         hata.setTitle('Hata!')
         hata.setDescription(`
         Böyle bir dil bulunamadı. İşte kullanabileceğiniz diller:
         
         \`tr\` = Türkçe
         \`en\` = English
         `)
         message.channel.send(hata)
       }
     } else
     if(atr) {
       if(dil == 'tr') {
         hata.setTitle("Hata!")
         hata.setDescription('Zaten botun sunucudaki dili **Türkçe** :/')
         message.channel.send(hata)
         return;
       }
       db.set(`lang_${message.guild.id}`, 'tr')
       başarılı.setTitle('Dil Değiştirme Başarılı!')
       başarılı.setDescription("Botun dili sunucuda başarıyla **Türkçe** olarak ayarlandı.")
       message.channel.send(başarılı)
     }
     else if(aen) {
       if(dil == 'en') {
         hata.setTitle("Error!")
         hata.setDescription('The language of the bot on the server is **English** :/')
         message.channel.send(hata)
         return;
       }
       db.set(`lang_${message.guild.id}`, 'en')
       başarılı.setTitle('Link change successful!')
       başarılı.setDescription("Bot's language has been successfully set to **English** on the server.")
       message.channel.send(başarılı)
     }
     else if(dil == 'en') {
       hata.setTitle("Error!")
       hata.setDescription('Please specify a language! Sample: \`!lang set tr\`')
       message.channel.send(hata)
     }
     else if(dil == undefined || dil == 'tr') {
       hata.setTitle("Hata!")
       hata.setDescription('Lütfen bir dil belirtiniz! Örnek: \`!dil değiştir en\`')
       message.channel.send(hata)
     }
   }
   else if(a1 == 'değiştir') {
     if(ayok) {
       if(dil == 'en') {
         hata.setTitle('Error!')
         hata.setDescription(`
         No such language was found. Here are the languages you can use:
         
         \`tr\` = Türkçe
         \`en\` = English
         `)
         message.channel.send(hata)
       } else if(dil == 'tr' || dil == undefined) {
         hata.setTitle('Hata!')
         hata.setDescription(`
         Böyle bir dil bulunamadı. İşte kullanabileceğiniz diller:
         
         \`tr\` = Türkçe
         \`en\` = English
         `)
         message.channel.send(hata)
       }
      } else
     if(atr) {
       if(dil == 'tr') {
         hata.setTitle("Hata!")
         hata.setDescription('Zaten botun sunucudaki dili **Türkçe** :/')
         message.channel.send(hata)
         return;
       }
       db.set(`lang_${message.guild.id}`, 'tr')
       başarılı.setTitle('Dil Değiştirme Başarılı!')
       başarılı.setDescription("Botun dili sunucuda başarıyla **Türkçe** olarak ayarlandı.")
       message.channel.send(başarılı)
     }
     else if(aen) {
       if(dil == 'en') {
         hata.setTitle("Error!")
         hata.setDescription('Already the language of the bot on the server is **English** :/')
         message.channel.send(hata)
         return;
       }
       db.set(`lang_${message.guild.id}`, 'en')
       başarılı.setTitle('Link change successful!')
       başarılı.setDescription("Bot's language has been successfully set to **English** on the server.")
       message.channel.send(başarılı)
     }
     else if(dil == 'en') {
       hata.setTitle("Error!")
       hata.setDescription('Please specify a language! Sample: \`!lang set en\`')
       message.channel.send(hata)
     }
     else if(dil == undefined || dil == 'tr') {
       hata.setTitle("Hata!")
       hata.setDescription('Lütfen bir dil belirtiniz! Örnek: \`!dil değiştir tr\`')
       message.channel.send(hata)
     }
   }
   else if(dil == undefined) {
     tr.setDescription('Botun dili sunucunuzda varsayılan olarak **Türkçe**! Dilini değiştirmek için \`!dil değiştir en\`')
     message.channel.send(tr)
   }
   else if(dil == 'tr') {
     tr.setDescription('Botun dili sunucunuzda **Türkçe**! Dilini değiştirmek için \`!dil değiştir en\`')
     message.channel.send(tr)
   }
   else if(dil == 'en') {
     message.channel.send(en)
   }

};

exports.conf = {
  aliases: ['dil', 'lang'], //komutun başka adları
  permLvl: 0 //0, 2, 3, 4 
};

exports.help = {
  name: 'language', //komutun adı 
  description: 'Botun dilini değiştirir', //komutun açıklaması 
  usage: '!language set <lang>' //komutun kullanımı
};
