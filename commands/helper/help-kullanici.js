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

if(dil == 'tr' || dil == undefined){
let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(`**Frowy Botun Kullanıcı Menüsüne Hoşgeldiniz**`)
.setDescription(`
**${prefix}rozetler** Sunucuda Hangi Rozete Sahip Kaç Kişinin Olduğunu Gösterir.
**${prefix}avatar** Avatarınızı Gösterir.
**${prefix}kullanıcı-bilgi** Etiketlediyiniz Veya İdsini Girdiğiniz Kullanıcı Hakkında Bilgi Verir.
**${prefix}yetkilerim** Komut Kullanıldığı Sunucudaki Yetkilerinizi Gösterir.
**${prefix}afk** Afk Olursunuz.
`)
.setImage("https://cdn.discordapp.com/attachments/867075670626533407/879665274075381760/standard.gif")
message.inlineReply(embed)
}

if(dil == 'en'){
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setColor('#d02090')
    .setTitle(`**Frowy Botun Kullanıcı Menüsüne Hoşgeldiniz**`)
    .setDescription(`
    **${prefix}badges** Shows how many people have which badge on the server.
    **${prefix}avatar** Shows Your Avatar.
    **${prefix}user-info** Gives Information About the User You Have Tagged Or Entered Id.
    **${prefix}perms** Command Shows Your Authorizations on the Server It's Used.
    **${prefix}afk** You Will Be Afk.
    `)
    message.inlineReply(embed) 
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı-yardım',"users"],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: 'Botun Kullanıcı Menüsünü Gösterir.',
  usage: 'moderasyon'
};
