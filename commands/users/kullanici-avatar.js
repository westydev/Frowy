const db = require("quick.db")
const Discord = require(`discord.js`)
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs

exports.run = async(client, message)=> {
var dil = db.fetch(`lang_${message.guild.id}`)
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if(dil == 'tr' || dil == undefined){
    let user = message.mentions.users.first() || message.author
    if(user){
   let embed = new Discord.MessageEmbed()
  .setAuthor(`${user.tag} adlı kullanıcının avatarı:`)
  .setImage(user.displayAvatarURL({dynamic:true})) 
  .setTimestamp()
  .setFooter(`Frowy`)
  message.inlineReply(embed)
   } else {
    let embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}  adlı kullanıcının avatarı:` , message.author.avatarURL )
  .setImage(message.author.avatarURL({dynamic:true}))
  .setTimestamp()
  .setFooter(`Frowy`)
  message.inlineReply(embed)
   } 
}
if(dil == 'en') {
    let user1 = message.mentions.users.first() || message.author
    if(user1){
  let embed2 = new Discord.MessageEmbed()
  .setAuthor(`${user1.tag} avatar:`)
  .setImage(user1.displayAvatarURL({dynamic:true})) 
  .setTimestamp()
  .setFooter(`Frowy`)
  message.inlineReply(embed2)
   } else {
    let embed1 = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}  avatar:` , message.author.avatarURL )
  .setImage(message.author.avatarURL({dynamic:true}))
  .setTimestamp()
  .setFooter(`Frowy`)
  message.inlineReply(embed1)
   } 
}
};

exports.conf = {
    enabled:false,
    guildOnly: false,
    aliases: ["avatar","avatarım"],
    permLevel: 0
}

exports.help = {
    name: 'pp',
    usage: 'kullanımı',
    description: 'açıklama'
}
