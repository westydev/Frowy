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
var dil = db.fetch(`lang_${message.guild.id}`)
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (dil == 'tr' || dil == undefined) {
    if(message.author.id !== message.guild.owner.user.id) return message.reply(mesajtr.ownernoperm)
  let kanal = await db.fetch(`kanalk_${message.guild.id}`)
  if (!kanal) {
    let embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`Kanal koruma zaten ayarlanmamış!`);
    message.inlineReply(embed);
    return;
  }
  db.delete(`kanalk_${message.guild.id}`);
  let embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setFooter(client.user.username, client.user.avatarURL())
    .setDescription(`Kanal koruma sistemi sıfırlandı!`);
  message.inlineReply(embed);
  return;
}
if(dil == 'en') {
    if(message.author.id !== message.guild.owner.user.id) return message.reply(mesajen.ownernoperm)
    let kanal = await db.fetch(`kanalk_${message.guild.id}`)
    if (!kanal) {
        let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`Channel protection not already set!`);
      message.inlineReply(embed);
      return;
    }
    db.delete(`kanalk_${message.guild.id}`);
    let embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`Channel protection system reset!`);
    message.inlineReply(embed);
    return;
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["channel-protection-reset"],
  permLevel: 3
};

exports.help = {
  name: "kanal-koruma-sıfırla",
  description: "kanal-koruma-sıfırla",
  usage: "kanal-koruma-sıfırla"
};
