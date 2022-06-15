const Discord = require('discord.js');
const db = require("quick.db")
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
exports.run = async(client, message, args) => {
  var dil = db.fetch(`lang_${message.guild.id}`)
  if(dil == 'tr' || dil == undefined) {
    if (!args[0])
    return message.inlineReply(
      `Yavaş modu ayarlamam için bir sayı yazmalısın!`
    );
if (args[0] > 1000) return message.inlineReply("Yavaş mod en fazla 1000 olabilir.")
  if (isNaN(args[0])) return message.inlineReply(`Bu bir sayı değil!`);
  let reason = message.content.slice("..");
  if (!reason) {
    reason == "Channel";
  }
  message.channel.setRateLimitPerUser(args[0], reason);
  message.inlineReply(
    `Artık bu kanala **${args[0]}** saniyede bir mesaj yazılabilecek.`
  );
  }
  if (dil == 'en') {
    if (!args[0])
    return message.inlineReply(
      `You have to type a number for me to set the slow mode!`
    );
if (args[0] > 1000) return message.inlineReply("Slowmode en fazla 1000 olabilir.")
  if (isNaN(args[0])) return message.inlineReply(`That is not a number!`);
  let reason = message.content.slice("..");
  if (!reason) {
    reason == "Channel";
  }
  message.channel.setRateLimitPerUser(args[0], reason);
  message.inlineReply(
    `A message can now be written to this channel once per **${args[0]}**.`
  );
  }
};
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 3,
  kategori: "mod"
};

exports.help = {
 name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/1000]',
};