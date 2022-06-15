const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
const db = require("quick.db")
require("moment-duration-format");
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
exports.run = async (client, message, args) => {
  var dil = db.fetch(`lang_${message.guild.id}`)
      let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
      if(dil == 'tr' || dil == undefined) {
        let duration1 = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
      let istatistikozel1 = new Discord.MessageEmbed()
      .setColor(0x36393F)
  .setDescription(`${ client.user.username}`)
    .addField(`Sahip/Geliştiriciler`, `${prefix}destekçiler`, true)
    .addField(`Bellek Kullanımı`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField(`Sunucu Sayısı`, `${client.guilds.cache.size.toLocaleString()}`, true)
    .addField(`Toplam Kullanıcı Sayısı`, `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField(`Bot Versionu`, `${ayarlar.version}`, true)
    .addField(`Ne Kadar Süredir Aktif`, `${duration1}`, true)
    .addField(`Ping`, `${client.ws.ping}`, true)
    .addField(`Discord.js Sürümü`, `${Discord.version}`, true)
    .addField(`Botta Bulunan Toplam Komut Sayısı`,`${client.commands.size}`, true)
    .addField(`Destek Sunucum`, `[Tıkla](https://discord.gg/quepsy)`, true)
    .addField(`Botu Davet Et`, `[Tıkla](https://discord.com/oauth2/authorize?client_id=811238807692771348&scope=bot&permissions=8)`, true)
    .addField(`Bota Oy Ver`, `[Tıkla](https://top.gg/bot/811238807692771348/vote)`, true)
    message.inlineReply(istatistikozel1) // türkçe
      }
      if (dil == 'en') {
        let duratio111n = moment.duration(client.uptime).format(" D [Day], H [Hours], m [Minute], s [Second]");
        let istatistikozeqqqqql = new Discord.MessageEmbed()
        .setColor(0x36393F)
    .setDescription(`${ client.user.username}`)
      .addField(`Owner/Developers`, `${prefix}supporters`, true).addField(`Memory Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
      .addField(`Number of Servers`, `${client.guilds.cache.size.toLocaleString()}`, true)
      .addField(`Total Number of Users`, `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
      .addField(`Number of Channels`, `${client.channels.cache.size.toLocaleString()}`, true)
      .addField(`How Long Has It Been Active`, `${duratio111n}`, true)
      .addField(`Ping`, `${client.ws.ping}`, true)
      .addField(`Discord.js Version`, `${Discord.version}`, true)
      .addField(`Total Number of Commands Found in the Bot`,`${client.commands.size}`, true)
      .addField(`My Support Server`, `[Click](https://discord.gg/quepsy)`, true)
      .addField(`İnvite To Bot`, `[Click](https://discord.com/oauth2/authorize?client_id=811238807692771348&scope=bot&permissions=8)`, true)
      .addField(`Vote To Bot`, `[Click](https://top.gg/bot/811238807692771348/vote)`, true)
      message.inlineReply(istatistikozeqqqqql)// ingilizce
      }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'stats', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};