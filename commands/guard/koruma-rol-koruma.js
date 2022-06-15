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
    let kanal = message.mentions.channels.first();
    if (!kanal) {
        let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`Lütfen log kanalını etiketleyiniz!`);
      message.inlineReply(embed);
      return;
    }
    db.set(`rolk_${message.guild.id}`, kanal.id);
    let embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`Rol koruma log kanalı; ${kanal} olarak ayarlandı!`);
    message.inlineReply(embed);
    return;
}
if(dil == 'en') {
  if(message.author.id !== message.guild.owner.user.id) return message.reply(mesajen.ownernoperm)
    let kanal = message.mentions.channels.first();
    if (!kanal) {
        let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`Please tag the log channel!`);
      message.inlineReply(embed);
      return;
    }
    db.set(`rolk_${message.guild.id}`, kanal.id);
    let embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`Role protection log channel; It's set to ${kanal}!`);
    message.inlineReply(embed);
    return;
}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["role-protection"],
  permLevel: 3
};

exports.help = {
  name: "rol-koruma",
  description: "rol-koruma",
  usage: "rol-koruma"
};
