const db = require("quick.db")

  //////////////////////////////////////////////
const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "TR_tr") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        var kanal = message.mentions.channels.first();
        if(!kanal) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('BLACK')
            .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
            .setDescription(`:warning: Bir kanal belirtin!`)
            .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
            )
        db.set(`kayıtlog_${message.guild.id}`, kanal.id)
        return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('BLACK')
            .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
            .setDescription(`:white_check_mark: Kayıt Log Kanalı <#${kanal.id}> olarak ayarlandı!`)
            .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
            ) // türkçe

    }else{
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
var kanal = message.mentions.channels.first();
if(!kanal) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`:warning: Bir kanal belirtin!`)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
db.set(`kayıtlog_${message.guild.id}`, kanal.id)
return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`:white_check_mark: Kayıt Log Kanalı <#${kanal.id}> olarak ayarlandı!`)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    ) // ingilizce
    }
};
exports.conf = {
    aliases: ['kayıt-log'],
    permLevel: 3
};
exports.help = {
    name: "kayıtlog"
}