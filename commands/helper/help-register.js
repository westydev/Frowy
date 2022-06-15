const db = require("quick.db")
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
//////////////////////////////////////////////
const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
      .setColor('#d02090')
     .setTitle(`**Frowy Bot Kayıt Menüsüne Hoşgeldiniz** `)
      .setDescription(`
**» ${prefix}alınacak-rol** Kayıt Edilen Kişiden Alınacak Rolü Ayarlar.
**» ${prefix}alınacak-rol sıfırla **  Kayıt Edilen Kişiden Alınacak Rolü Sıfırlar.
**» ${prefix}kayıt-kanal** Kayıtın Yapılacağı Kanalı Belirlersiniz.
**» ${prefix}kayıt-kanal sıfırla**  Kayıtın Yapılacağı Kanalı Sıfırlarsınız.
**» ${prefix}kayıt-hg ** Gelen Kullanıcılara Kayıt Bilgisi Verir.
**» ${prefix}kayıt-hg sıfırla **  Kayıt Hg sistemini sıfırlar.
**» ${prefix}kayıt-yetkili**  Kayıt Edebilecek Yetkiyi Ayarlar.
**» ${prefix}kayıt-yetkili sıfırla**  Kayıt Edebilecek Yetkiyi Sıfırlar.
**» ${prefix}erkek-rol ** Kayıt Edilince Verilecek Erkek Rolü Ayarlar.
**» ${prefix}erkek-rol sıfırla **  Kayıt Edilince Verilecek Erkek Rolünü Sıfırlar.
**» ${prefix}kız-rol** Kayıt Edilince Verilecek Kız Rolü Ayarlar.
**» ${prefix}kız-rol sıfırla** Kayıt Edilince Verilecek Kız Rolünü Sıfırlar.
**» ${prefix}kayıt-tag** Kayıt Tag Ayarlarsınız.
**» ${prefix}kayıt-tag-sıfırla** Kayıtda Kullanılcak Tagı Sıfırlar.
**» ${prefix}kayıt-gif** Kayıt Gifi Ayarlar.
**» ${prefix}kayıt-gif-sıfırla** Kayıt Gifi Sıfırlar.
**» ${prefix}kayıt-log** Kayıt Log Ayarlar.
**» ${prefix}kayıt-log-sıfırla** Kayıt Log Sıfırlar(Kayıt Logu Kayıt Kanalına Atar).
**» ${prefix}kayıt-sayısı** Sunucuda Kaç Kayıt Etdiğinizi Görürsünüz.
**» ${prefix}kayıt-bilgi** Kayıt Ayarları Hakkında Bilgi Verir.
**» ${prefix}erkek ** Erkekleri Kayıt Etmeye Yarar.
**» ${prefix}kız ** Kızları Kayıt Etmeye Yarar.
`)
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setImage("https://cdn.discordapp.com/attachments/867075670626533407/879665274075381760/standard.gif")
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setFooter("Made By Westy    '#0001")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-sistemi', "yardım-kayıt", "kayıt-yardım"],
  permLevel: 0,
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'Botun Sistemler Menüsünü Gösterir.',
  usage: 'kayıt-sistemi'
};