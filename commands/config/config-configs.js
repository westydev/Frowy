const Discord = require('discord.js')
const db = require('quick.db')
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs

exports.run = async (client, message, args) => {

    var dil = db.fetch(`lang_${message.guild.id}`)
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    let modlog = message.guild.channels.cache.get(await db.fetch(`log_${message.guild.id}`));
    let sayackanal = db.fetch(`sayacK_${message.guild.id}`, kanal.id)  
    let sayachedef = db.fetch(`sayacS_${message.guild.id}`, sayı) 


    let configsEmbed  = new Discord.MessageEmbed()
    .setTitle("Sunucu Ayarları")
    .addField(`Sunucu Dili`,`${dil}`)
    message.channel.send("test")
}


exports.conf = {
    aliases: ['sunucu-ayarlar', 'server-configs']
}

exports.help = {
    name : "sunucu ayarlar"
}