const Discord = require("discord.js");
const db = require("quick.db");
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
module.exports.run = async (client, message, args) => {
  
  let prefix = args.slice(0).join(" ");
  var dil = db.fetch(`lang_${message.guild.id}`)
  if (dil == 'tr' || dil == undefined) {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      let embed = new Discord.MessageEmbed()
        .setDescription(mesajtr.adminnoperm)
        .setColor("BLACK");
        message.inlineReply(embed);
      return;
    }
    if (!prefix) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`Lütfen bir prefix belirtiniz!`)
        .setFooter(client.user.username, client.user.avatarURL);

        message.inlineReply(embed);
      return;
    }
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`Prefix; \`${prefix}\` olarak ayarlandı!`)
      .setFooter(client.user.username, client.user.avatarURL);

      message.inlineReply(embed);
    db.set(`prefix_${message.guild.id}`, prefix);
  }
  if (dil == 'en') {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      let embed = new Discord.MessageEmbed()
        .setDescription(mesajen.adminnoperm)
        .setColor("BLACK");
        message.inlineReply(embed);
      return;
    }
    if (!prefix) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`Please specify a prefix!`)
        .setFooter(client.user.username, client.user.avatarURL);

        message.inlineReply(embed);
      return;
    }
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`Prefix; It is set to \`${prefix}\`!`)
      .setFooter(client.user.username, client.user.avatarURL);

      message.inlineReply(embed);
    db.set(`prefix_${message.guild.id}`, prefix);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prefix","prefix-config"],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix",
  description: "prefix",
  usage: "prefix"
};
