const db = require("quick.db")

  //////////////////////////////////////////////
const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "TR_tr") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        var text = args.slice(0).join(' ')
        if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bir Tag Belirtin!"))
        db.set(`kayıttag_${message.guild.id}`, text)
        return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Kayıt Tagı ${text} Olarak Ayarlandı! `)) // türkçe

    }else{
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
var text = args.slice(0).join(' ')
if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bir Tag Belirtin!"))
db.set(`kayıttag_${message.guild.id}`, text)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Kayıt Tagı ${text} Olarak Ayarlandı! `)) // ingilizce
    }
};
exports.conf = {
    aliases: ['kayıt-tag'],
    permLevel: 3
};
exports.help = {
    name: "kayıttag"
}