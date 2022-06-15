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
    let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
    var dil = db.fetch(`lang_${message.guild.id}`)
    if(dil == 'tr' || dil == undefined) {
      if(message.author.id !== message.guild.owner.user.id) return message.reply(mesajtr.ownernoperm)
    let kanal = await db.fetch(`rolk_${message.guild.id}`)
    if (!kanal) {
      let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`Rol koruma zaten ayarlanmamış!`);
      message.inlineReply(embed);
      return;
    }
    db.delete(`rolk_${message.guild.id}`);
    let embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`Rol koruma sistemi sıfırlandı!`);
    message.inlineReply(embed);
    return;
    }
    if(dil == 'en') {
      if(message.author.id !== message.guild.owner.user.id) return message.reply(mesajen.ownernoperm)
      let kanal = await db.fetch(`rolk_${message.guild.id}`)
      if (!kanal) {
        let embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setFooter(client.user.username, client.user.avatarURL())
          .setDescription(`Role protection not already set!`);
        message.inlineReply(embed);
        return;
      }
      db.delete(`rolk_${message.guild.id}`);
      let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`Role protection system reset!`);
      message.inlineReply(embed);
      return;
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["role-protection-reset"],
  permLevel: 3
};

exports.help = {
  name: "rol-koruma-sıfırla",
  description: "rol-koruma-sıfırla",
  usage: "rol-koruma-sıfırla"
};
