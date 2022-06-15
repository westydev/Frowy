const db = require("quick.db")
const Discord = require('discord.js');
const talkedRecently = new Set();
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs

exports.run = async(client, message, args) => {
    /////////turkce
    /////////turkce
    /////////turkce
    /////////turkce
    /////////turkce
    var dil = db.fetch(`lang_${message.guild.id}`)
    let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ".";
    const bans = new Map();
    if(dil == 'tr' || dil == undefined) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(mesajtr.bannoperm);
        message.guild.fetchBans().then(g => {
            bans[g.id] = g;
            let banlist = (`${bans[g.id].map(ge => `\n (${ge.user.tag}) (${ge.user.id})`).join('\n')}`)
                    try {     
            let noembed = new Discord.MessageEmbed()
             .setColor('#0070FF')
            .setDescription(`Bu Sunucuda Yasaklı Kullanıcı Bulunmuyor.`)
            .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : "https://images-ext-2.discord.net/external/hHow2gpD0uyL8WnA8ynAHuPbzm_lE1lNAaxkLqDT0Fs/https/images-ext-1.discord.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
           .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
            if(banlist.length === 0) return message.inlineReply(noembed)
            const embed = new Discord.MessageEmbed()
                .setDescription(banlist)
                .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : "https://images-ext-2.discord.net/external/hHow2gpD0uyL8WnA8ynAHuPbzm_lE1lNAaxkLqDT0Fs/https/images-ext-1.discord.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
            .setColor('#0070FF')
            message.inlineReply(embed)
                  } catch (err) {
    const embed = new Discord.MessageEmbed()
        .addField(`Sunucuda Bulunan Yasaklılar`, 'Üzgünüm ama sunucunuzda fazla sayıda yasaklı kullanıcı bulunuyor Bu Yüzden gösteremiyorum. Discord buna izin vermiyor.')
        .setColor('RED')
      .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
        .setTimestamp()
    message.inlineReply(embed)
                  }
    });
    }
    //////ingilizce///////////
    //////ingilizce///////////
    //////ingilizce///////////
    //////ingilizce///////////
    if(dil == 'en') {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(mesajen.bannoperm);
        message.guild.fetchBans().then(g => {
            bans[g.id] = g;
            let banlist = (`${bans[g.id].map(ge => `\n (${ge.user.tag}) (${ge.user.id})`).join('\n')}`)
                    try {     
            let noembed = new Discord.MessageEmbed()
             .setColor('#0070FF')
            .setDescription(`There Are No Banned Users On This Server.`)
            .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : "https://images-ext-2.discord.net/external/hHow2gpD0uyL8WnA8ynAHuPbzm_lE1lNAaxkLqDT0Fs/https/images-ext-1.discord.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
           .setFooter('User using this command ' + message.author.tag, message.author.avatarURL())
            if(banlist.length === 0) return message.inlineReply(noembed)
            const embed = new Discord.MessageEmbed()
                .setDescription(banlist)
                .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : "https://images-ext-2.discord.net/external/hHow2gpD0uyL8WnA8ynAHuPbzm_lE1lNAaxkLqDT0Fs/https/images-ext-1.discord.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
    .setFooter('User using this command ' + message.author.tag, message.author.avatarURL())
            .setColor('#0070FF')
            message.inlineReply(embed)
                  } catch (err) {
    const embed = new Discord.MessageEmbed()
        .addField(`User using this command`, 'Sorry but your server has too many banned users So I cant show it. Discord does not allow this.')
        .setColor('RED')
      .setFooter('User using this command ' + message.author.tag, message.author.avatarURL())
        .setTimestamp()
    message.inlineReply(embed)
                  }
    });
    }
}                                           
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasak-listesi'],
  permLevel: 0
};

exports.help = {
  name: 'banlist',
  description: 'Sunucudaki Yasaklı Kullanıcıları Gösterir.',
  usage: 'banlist',
 
};