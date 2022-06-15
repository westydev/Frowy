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
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(mesajtr.adminnoperm)
        var gif = args.slice(0).join(' ')
        if(!gif) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bir Gif Veya Foto Belirtin!"))
        db.set(`kayıtgif_${message.guild.id}`, gif)
        return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Kayıt Gifi ${gif} Olarak Ayarlandı! `)) // türkçe
};
exports.conf = {
    aliases: ['kayıt-gif'],
    permLevel: 3
};
exports.help = {
    name: "kayıtgif"
}