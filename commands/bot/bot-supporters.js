const Discord = require("discord.js")
const db = require("quick.db")
const client = new Discord.Client();
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
exports.run = async (client,message,args) => {
var dil = db.fetch(`lang_${message.guild.id}`)
if(dil == 'tr' || dil == undefined ){
    let destekciler = new Discord.MessageEmbed()
    .setTitle("Bot Sahibi/Geliştiriciler/Sponsorlar")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .addField("Sahibler",`<@840695080075526164>`)
    .addField("Geliştiriciler","<@840695080075526164>")
    .addField("Sponsorlar", " Nacsshost.com ")
    .addField("Destekçiler", "<@441292855621845023> <@773558063813754880> <@811978891899305991>")
    .setFooter("Made By Westy#2040")
    message.inlineReply(destekciler)
}
if(dil == 'en'){
    let destekciler = new Discord.MessageEmbed()
    .setTitle("Bot Owner/Supporters/Sponsor")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .addField("Owners",`<@840695080075526164>`)
    .addField("Developers","<@840695080075526164>")
    .addField("Sponsors", " Nacsshost.com")
    .addField("Supporters", "<@441292855621845023> <@773558063813754880>")
    .setFooter("Made By Westy#2040")
    message.inlineReply(destekciler)
}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["supporters","destekciler"],
    kategori: "Bot",
    permLevel: 0
}
exports.help = {
name : "destekçiler",
description: "Bot Destekçiler",
usage: 'supportets'
}