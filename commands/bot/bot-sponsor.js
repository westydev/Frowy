const Discord = require("discord.js")
const db = require("quick.db")
const client = new Discord.Client();
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sponsorlar","sponsors"],
    kategori: "Bot",
    permLevel: 0
}
    exports.help = {
    name : "sponsor",
    description: "Bot Destekçiler",
    usage: 'supportets'
}
exports.run = async (client,message,args) => {
    let sponsor = new Discord.MessageEmbed();
    sponsor.setTitle("Nacsshost.com")
    sponsor.setDescription(`
    NACSSHOST İnternet ve Bilişim Hizmetleri

Yönetim Paneli ile sunucu yönetimi tamamen sizin kontrolünüzde! Otomatik kurulum panelimiz ile vakit kaybı olmadan istediğiniz işlemi yapabilirsiniz.


Oyun Sunucularınızda kesintisiz hizmet ve ping'siz oyun keyfinin tadını çıkartın. Sunucularımız Türkiye Lokasyon olduğu için liste sırasında en yuları çıkarsınız.

Bağlantılar;
[Site](https://nacsshost.com/) | [Discord](https://discord.nacsshost.com/) | [En uygun fiyatla discord bot sunucu alın](https://nacsshost.com/discord-bot-hosting)
    `)
    .setFooter("Nacsshost.com / Kalite Ve Performans")
    message.inlineReply(sponsor)
}


