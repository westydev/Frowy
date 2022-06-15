

//moduless
const Discord = require("discord.js")
const db = require("quick.db")
const { MessageButton } = require('discord-buttons');
//moduless

////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
exports.run = async (client,message,args) => {
////////DB Config
var dil = db.fetch(`lang_${message.guild.id}`)
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
////////DB Config
if(dil == 'tr' || dil == undefined){
    let botyrdm = new Discord.MessageEmbed()
    .setTitle(`**Frowy Botun Bot Yardım Menüsüne Hoşgeldiniz**`)
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
    .setFooter("Made By Westy ’#0001")
    .setColor(colors.yesil)
    .setDescription(`
    **${prefix}bilgi** Botun İstatistiklerini Gösterir.
    **${prefix}destek** Bot Hakkında Destek Almak İçin Kullanılır.
    **${prefix}destekçiler** Botun Destekçilerini, Sponsorlarını, Kurucularını Gösterir.
    `)
    .setImage("https://cdn.discordapp.com/attachments/867075670626533407/879665274075381760/standard.gif")
    message.inlineReply(botyrdm)
}
if(dil == 'en'){
    let botyrdm = new Discord.MessageEmbed()
    .setTitle(`**Welcome to Frowy Bot's Bot Help Menu**`)
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
    .setFooter("Made By Westy ’#0001")
    .setColor(colors.yesil)
    .setDescription(`
    **${prefix}stats** Shows Bot's Statistics.
    **${prefix}supporters** Shows Supporters, Sponsors, Founders of the Bot.
    `)
    message.inlineReply(botyrdm)
}
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    premium: true,
    aliases: ["help-bot","yardım-bot","bot-yardım"],
    permLevel: 0,
    kategori: "help"
}
exports.help = {
    name: "botyrd",
    description: "Botun Bot Yardım Menüsünü Gösterir.",
    usage: "helbot"
}