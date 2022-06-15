const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../config/config.json');
const logschannel = require('../config/logschannel.json');
var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "!yardım",
        "!bilgi"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "" );
        }, 2 * 2500);
  client.user.setStatus("online");
  client.user.setActivity(`Botumuz Online Kullanabilirsiniz !`);
  console.log ('_________________________________________');
  console.log (`Kullanıcı İsmi     : ${client.user.username}`);
  console.log (`Sunucular          : ${client.guilds.cache.size.toLocaleString()} Sunucu`);
  console.log (`Kullanıcılar       : ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı`);
  console.log (`Komut Sayısı       : ${client.commands.size} Komut Var`);
  console.log (`Prefix             : ${ayarlar.prefix}`);
  console.log (`Durum              : ${client.user.presence.status}!`);
  console.log (`Kuruluş Tarihi     : ${moment(client.user.createdAt).format(" DD MMMM YYYY dddd (hh:mm:ss)")}`);
  console.log (`Ram Kullanımı      : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
  console.log (`Aktiflik Durumu    : Aktif!`);
  console.log ('_________________________________________');


  let readyEmbed = new Discord.MessageEmbed()
  .addField(`Kullanıcı İsmi `, ` ${client.user.username}`)
  .addField(`Sunucular `, ` ${client.guilds.cache.size.toLocaleString()} Sunucu`)
  .addField(`Kullanıcılar `, ` ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı`)
  .addField(`Komut Sayısı `, ` ${client.commands.size} Komut Var`)
  .addField(`Prefix `, ` ${ayarlar.prefix}`)
  .addField(`Durum `, ` ${client.user.presence.status}!`)
  .addField(`Kuruluş Tarihi `, ` ${moment(client.user.createdAt).format(" DD MMMM YYYY dddd (hh:mm:ss)")}`)
  .addField(`Ram Kullanımı `, ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
  .addField(`Aktiflik Durumu `, ` Aktif!`)
  client.channels.cache.get(logschannel.readychannel).send (readyEmbed);
};