
  const db = require("quick.db")
  const Discord = require('discord.js')
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
         if(dil == 'tr' || dil == undefined) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply(mesajtr.adminnoperm);
        let logk = message.mentions.channels.first();
        let logkanal = await db.fetch(`log_${message.guild.id}`)
        if (args[0] === "sıfırla" || args[0] === "kapat") {
          if(!logkanal) return message.inlineReply(` Modlog Kanalı Zaten ayarlı değil.`);
          db.delete(`log_${message.guild.id}`)
         message.inlineReply(` ModLog Kanalı başarıyla sıfırlandı.`);
          return
        }
        if (!logk) return message.inlineReply(` Yanlış Kullanım Doğru Kullanım: ${prefix}mod-log #kanal`);
        db.set(`log_${message.guild.id}`, logk.id)
        message.inlineReply(` Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.`);
        // message.react('') // türkçe
        }
        if (dil == 'en') {
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply(mesajen.adminnoperm);
            let logk = message.mentions.channels.first();
            let logkanal = await db.fetch(`log_${message.guild.id}`)
              if (args[0] === "reset" || args[0] === "close") {
                if(!logkanal) return message.inlineReply(` Modlog Channel is not already set.`);
                db.delete(`log_${message.guild.id}`)
               message.inlineReply(` ModLog Channel has been reset successfully.`);
                return
              }
            if (!logk) return message.inlineReply(` Incorrect Usage Correct Usage: ${prefix}mod-log #channel`);
            db.set(`log_${message.guild.id}`, logk.id)
            message.inlineReply(` Mod-Log channel successfully set to ${logk}.`);
            // message.react('') // ingilizce
        }
      
  };
  exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['mod-log','modlog','log-ayarlama','logayarla','log','vkanal','kayıtkanalı','d'],
      permLevel: 3,//Kendi permlerinize göre ayarlayın,
    kategori:'moderasyon'
  };
  
  exports.help = {
      name: 'mod-log',
      description: 'Mod-Log kanalını belirler.',
      usage: 'mod-log <#kanal>'
  };