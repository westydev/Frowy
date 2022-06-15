const db = require("quick.db")
const { Client, Message, MessageEmbed } = require("discord.js");
/////////////////////////////Const Tanımlama Kısmı
exports.run = async (client, message, args) => {
    var dil = db.fetch(`lang_${message.guild.id}`)
    let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
    if(dil == 'tr' || dil == undefined) {
    let content = args.join(" ");
      if (!content) return message.reply("AFK kalmak için sebep gir!")
      db.set(`afk-${message.author.id}+${message.guild.id}`, content);
      if (message.guild.owner.id !== message.author.id) {
          message.member.setNickname(`[AFK] ${message.author.username}`)
      }
      let embed = new MessageEmbed()
        .setDescription(`Başarıyla AFK oldun!\n**Sebep :** ${content}`)
        .setColor("GREEN")
        .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({ dynamic: true })
        );
      message.inlineReply(embed);// türkçe
    }

    if(dil == 'en') {

      let content1 = args.join(" ");
      if (!content1) return message.reply("Enter reason to stay AFK!")
      db.set(`afk-${message.author.id}+${message.guild.id}`, content1);
      if (message.guild.owner.id !== message.author.id) {
          message.member.setNickname(`[AFK] ${message.author.username}`)
      }
      let embed1 = new MessageEmbed()
        .setDescription(`Successfully Afked! \n**Reason :** ${content1}`)
        .setColor("GREEN")
        .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({ dynamic: true })
        );
      message.inlineReply(embed1);// ingilizce
    }
}

exports.conf = {
aliases: []
}

exports.help = {
name: 'afk',
description: 'afk olursunuz',
usage: 'afk <sebep>'
}
