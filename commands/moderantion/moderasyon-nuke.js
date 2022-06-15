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
    if (dil == 'tr' || dil == undefined) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.inlineReply(mesajtr.channelnotperm);
        message.channel.clone().then(knl => {
            let position = message.channel.position;
            knl.setPosition(position);
            message.channel.delete();
            let embed = new Discord.MessageEmbed()
            .setDescription("Bu Kanal Patlatıldı !")
                .setImage('https://media1.giphy.com/media/oe33xf3B50fsc/giphy.gif')
            knl.send(embed)
        });
    }
    if (dil == 'en') {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.inlineReply("Not You perms");
        message.channel.clone().then(knl => {
            let position = message.channel.position;
            knl.setPosition(position);
            message.channel.delete();
            let embed = new Discord.MessageEmbed()
            .setDescription("This Channel Nuked !")
                .setImage('https://media1.giphy.com/media/oe33xf3B50fsc/giphy.gif')
            knl.send(embed)
        });
    }
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["nuke", "nuk", "nk"],
    permLevel: 3
};

exports.help = {
    name: 'nuke',
    description: 'belirtilen kanalı siler tekrar oluşturur.',
    usage: 'nuke'
};