const db = require("quick.db")
const Discord = require("discord.js")
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs

module.exports.run = async (client, message, args) => {
   let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!"
   var dil = db.fetch(`lang_${message.guild.id}`)
   if(dil == 'tr' || dil == undefined) {
    if(message.author.id !== message.guild.owner.user.id) return message.reply(mesajtr.ownernoperm)
    let kanal = await db.fetch(`bank_${message.guild.id}`)
    if (!kanal) {
      let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`Ban koruma sistemi zaten ayarlanmamış!`);
      message.inlineReply(embed);
      return;
    }
    db.delete(`bank_${message.guild.id}`);
    let embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`Ban koruma sistemi sıfırlandı!`);
    message.inlineReply(embed);
    return;
   }
   if(dil == 'en') {
    if(message.author.id !== message.guild.owner.user.id) return message.reply(mesajen.ownernoperm)
    let kanal = await db.fetch(`bank_${message.guild.id}`)
    if (!kanal) {
        let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`Ban Protection System Not Set Up Already!`);
      message.inlineReply(embed);
      return;
    }
    db.delete(`bank_${message.guild.id}`);
    let embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`Ban Protection System Reset!`);
    message.inlineReply(embed);
    return;
   }
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban-protection-reset"],
  permLevel: 3
};

exports.help = {
  name: "ban-koruma-sıfırla",
  description: "ban-koruma-sıfırla",
  usage: "ban-koruma-sıfırla"
};
