const db = require("quick.db")
const Discord = require('discord.js');
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
module.exports.run = async(client, message, args) => {
  let kayitgif = db.fetch(`kayıtgif_${message.guild.id}`)
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(mesajtr.adminnoperm);
      if(!kayitgif) return message.channel.send("Kayıt Gif Zaten Ayarlanmamış")
      db.delete(`kayıtgif_${message.guild.id}`)
      return message.channel.send(
      new Discord.MessageEmbed()
      .setColor('BLACK')
      .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setTitle(":white_check_mark: Başarılı!")
      .setDescription(`Bot'un Kayıtda Kullanılcak Hoşgeldin Gifi Sıfırlandı sıfırlandı!`)
      .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
      )
};
module.exports.conf = {
  aliases: [],
   permLevel: 3
  };
module.exports.help = 
{
  name: "kayıt-gif-sıfırla"
};