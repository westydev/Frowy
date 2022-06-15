const db = require("quick.db")
const Discord = require('discord.js');
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
 
exports.run = async(client, message, args) => {
var dil = db.fetch(`lang_${message.guild.id}`)
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

if(dil == 'en') {
    let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Welcome To Frowy Bot Moderantion Menu** `)
.setDescription(`
**» ${prefix}nuke** Deletes the channel and opens a channel with the same name instead.
**» ${prefix}kick** Kicks Tagged Person from Server.
**» ${prefix}delete** Deletes Messages As You Write.
**» ${prefix}ban** Ban someone from the server. | Example Usage : ${prefix}ban id
**» ${prefix}unban** You Unban Someone You Banned. | Example Usage : ${prefix}unban id
**» ${prefix}lock** Lock The Tagged Channel | Example Usage ${prefix}lock #channelname
**» ${prefix}unlock** Unlock The Tagged Channel | Example Usage ${prefix}unlock #channelname
**» ${prefix}giveaway** Started giveaway. | ${prefix}giveaway time #chhannel text
**» ${prefix}banlist**  Show the server banlist.
`)
message.inlineReply(embed)
 }
 
 if(dil == 'tr' || dil == undefined) {
    let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Frowy Bot Moderasyon Yardım Menüsüne Hoşgeldiniz.** `)
.setDescription(`
**» ${prefix}nuke** Kanalı Silip Yerine Aynı İsimde Kanal Oluşturur.
**» ${prefix}kick** Etiketlenen Kişiyi Sunucudan Atar.
**» ${prefix}delete** Yazdığınız Kadar Mesaj Siler.
**» ${prefix}ban** Ban Atarsınız. | Örnek Kullanım : ${prefix}ban id
**» ${prefix}unban** Banladığınız Birinin Banını Geri Açarsınız. | Örnek Kullanım : ${prefix}unban id
**» ${prefix}lock** Etiketlediğiniz Kanalı Kilitler | ${prefix}lock #kanalismi
**» ${prefix}unlock** Etiketlediğiniz Kanalın Kilitini Açar | ${prefix}unlock #kanalismi 
**» ${prefix}çekiliş** Çekiliş Yaparsınız. | ${prefix}çekiliş süre #kanal hediye
**» ${prefix}banlist**  Sunucudaki Banlananların Listesini Gösterir. 
`)
.setImage("https://cdn.discordapp.com/attachments/867075670626533407/879665274075381760/standard.gif")
message.inlineReply(embed)
 }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['moderation',"moderasyon-yardım"],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon',
  description: 'Botun Moderasyon Menüsünü Gösterir.',
  usage: 'moderasyon'
};
