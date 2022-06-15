const db = require("quick.db")
const Discord = require("discord.js");
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
module.exports.run = async (bot, message, args) => {

      var dil = db.fetch(`lang_${message.guild.id}`)
      if(dil == 'en') {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            let embed = new Discord.MessageEmbed()
              .setDescription(mesajen.kicknoperm)
              .setColor("BLACK");
            message.inlineReply(embed);
            return;
          }
          let u = message.mentions.users.first();
          if (!u) {
            return message.inlineReply(
              new Discord.MessageEmbed()
                .setDescription("Please tag the person to be kicked out!")
                .setColor("BLACK")
                .setFooter(bot.user.username, bot.user.avatarURL)
            );
          }
          let embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(` ${u} Do you approve of the person being kicked off the server?`)
            .setFooter(bot.user.username, bot.user.avatarURL);
          message.inlineReply(embed).then(async function(sentEmbed) {
            let emojiArray = ["✅"];
            let filter = (reaction, user) =>
              emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
            await sentEmbed.react(emojiArray[0]).catch(function() {});
            var reactions = sentEmbed.createReactionCollector(filter, {
              time: 30000
            });
            reactions.on("end", () => sentEmbed.edit("Transaction canceled!"));
            reactions.on("collect", async function(reaction) {
              if (reaction.emoji.name === "✅") {
                message.inlineReply(
                  `Transaction confirmed! ${u} has been kicked from the server!`
                );
         
                message.guild.member(u).kick();
              }
            });
          });
      }
      if(dil == 'tr' || dil == undefined) {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
          let embed = new Discord.MessageEmbed()
            .setDescription(mesajtr.kicknoperm)
            .setColor("BLACK");
          message.inlineReply(embed);
          return;
        }
          let u = message.mentions.users.first();
          if (!u) {
            return message.inlineReply(
              new Discord.MessageEmbed()
                .setDescription("Lütfen atılacak kişiyi etiketleyiniz!")
                .setColor("BLACK")
                .setFooter(bot.user.username, bot.user.avatarURL)
            );
          }
          let embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(` ${u} Adlı şahsın sunucudan atılmasını onaylıyor musunuz?`)
            .setFooter(bot.user.username, bot.user.avatarURL);
          message.inlineReply(embed).then(async function(sentEmbed) {
            let emojiArray = ["✅"];
            let filter = (reaction, user) =>
              emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
            await sentEmbed.react(emojiArray[0]).catch(function() {});
            var reactions = sentEmbed.createReactionCollector(filter, {
              time: 30000
            });
            reactions.on("end", () => sentEmbed.edit(" İşlem iptal oldu!"));
            reactions.on("collect", async function(reaction) {
              if (reaction.emoji.name === "✅") {
                message.inlineReply(
                  `İşlem onaylandı! ${u} adlı şahıs sunucudan atıldı!`
                );
         
                message.guild.member(u).kick();
              }
            });
          });
      }
};
 
module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
module.exports.help = {
  name: "kick",
  description: "kick",
  usage: "kick"
};