const db = require("quick.db")

  //////////////////////////////////////////////
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "TR_tr") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        db.delete(`kayıttag_${message.guild.id}`)
        return message.channel.send(
            new Discord.MessageEmbed()
            .setColor('BLACK')
            .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
            .setTitle(":white_check_mark: Başarılı!")
            .setDescription(`Kayıt Sisteminde Kullanılcak Tag Sıfırlandı`)
            .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
            ) // türkçe

    }else{
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
db.delete(`kayıttag_${message.guild.id}`)
return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":white_check_mark: Başarılı!")
    .setDescription(`Kayıt Sisteminde Kullanılcak Tag Sıfırlandı`)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    ) // ingilizce
    }
};
module.exports.conf = {aliases: [], permLevel: 3};
module.exports.help = {name: "kayıt-tag-sıfırla"};