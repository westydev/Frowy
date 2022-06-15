const Discord = require('discord.js');
const db = require("quick.db")
 ////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
exports.run = (client, message, args) => {
  var dil = db.fetch(`lang_${message.guild.id}`)
  if(dil == 'tr' || dil == undefined) {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.inlineReply(mesajtr.channelnotperm)

  let channel = message.mentions.channels.first() || message.channel;
  message.inlineReply(` ${channel} isimli kanal kilit açıldı.`).then(m => m.delete({timeout: 7000}));
  
  let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
  channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, message.author.tag+'Tarafindan Kanal Kilit Açıldı. ');
  channel.send(new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle(channel.name+'kanal kilit açıldı')
  .setDescription(`Moderatörler Kanal Kilitini Açtı`));
  }
 if(dil == 'en') {
  if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.inlineReply(mesajen.channelnotperm)

  let channel = message.mentions.channels.first() || message.channel;
  message.inlineReply(`Channel ${channel} has been unlocked.`).then(m => m.delete({timeout: 7000}));
  
  let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
  channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'Unlocked by '+message.author.tag);
  channel.send(new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle(channel.name+' has been unlocked.')
  .setDescription(`Mods had to unlock this channel.`));
 }

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'unlock'
};