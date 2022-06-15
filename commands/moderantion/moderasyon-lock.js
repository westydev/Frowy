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
  if (dil == 'en') {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.inlineReply(mesajen.channelnotperm)
    let channel = message.mentions.channels.first() || message.channel;
    let reason;
    if(!message.mentions.channels.first()) {
    if(args[0]) reason = args.slice(0).join(' ');
    };
    if(message.mentions.channels.first()) {
    if(args[1]) reason = args.slice(1).join(' ');
    };
    let reasonn;
    if(!reason) reasonn = '. No reason given.';
    if(reason) reasonn = ` for ${reason} reason.`;
    message.inlineReply(`Channel ${channel} has been locked.`).then(m => m.delete({timeout: 7000}));
    let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
    channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, 'Locked by '+message.author.tag);
    channel.send(new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(channel.name+' has been Locked.')
    .setDescription(`Unfortunately, mods had to lock this channel${reasonn} Please respect this decision and it MAY be reopened in the future.`));
  }
  if(dil == 'tr' || dil == undefined) {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.inlineReply(mesajtr.channelnotperm)
    let channel = message.mentions.channels.first() || message.channel;
    let reason;
    if(!message.mentions.channels.first()) {
    if(args[0]) reason = args.slice(0).join(' ');
    };
    if(message.mentions.channels.first()) {
    if(args[1]) reason = args.slice(1).join(' ');
    };
    let reasonn;
    if(!reason) reasonn = '. Sebeb Belirtilmedi';
    if(reason) reasonn = ` Sebeb : ${reason} `;
    message.inlineReply(` ${channel} isimli kanal kilitlendi.`).then(m => m.delete({timeout: 7000}));
    let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
    channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, message.author.tag+ ' Tarafında Kilitlendi. ');
    channel.send(new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(channel.name+' Kanal Kilitlendi')
    .setDescription(`Maalesef modlar bu kanalı kilitlemek zorunda kaldı ${reasonn} Lütfen bu karara saygı gösterin ve gelecekte yeniden AÇILABİLİR.`));
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'lock'
};