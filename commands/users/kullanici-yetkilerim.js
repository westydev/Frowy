const db = require("quick.db")

const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
exports.run = async(client, msg, args) => {
    var dil = db.fetch(`lang_${msg.guild.id}`)
    let prefix = (await db.fetch(`prefix_${msg.guild.id}`)) || "!";

    let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;

   //yönetici
   if (msg.member.hasPermission("ADMINISTRATOR")) x = emotes.basarili
   if (!msg.member.hasPermission("ADMINISTRATOR")) x = emotes.uyari
   
   //Denetim kaydı
   if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = emotes.basarili
   if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = emotes.uyari
   
   //Sunucuyu yönet
   if (msg.member.hasPermission("MANAGE_GUILD")) x3 = emotes.basarili
   if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = emotes.uyari
   
   //Rolleri yönet
   if (msg.member.hasPermission("MANAGE_ROLES")) x4 = emotes.basarili
   if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = emotes.uyari
   
   //Kanalları yönet
   if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = emotes.basarili
   if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = emotes.uyari
   
   //üyeleri at
   if (msg.member.hasPermission("KICK_MEMBERS")) x6 = emotes.basarili
   if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = emotes.uyari
   
   //üyeleri yasakla
   if (msg.member.hasPermission("BAN_MEMBERS")) x7 = emotes.basarili
   if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = emotes.uyari
   
   //mesajları yönet
   if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = emotes.basarili
   if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = emotes.uyari
   
   //kullanıcı adlarını yönet
   if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = emotes.basarili
   if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = emotes.uyari
   
   //emojileri yönet
   if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = emotes.basarili
   if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = emotes.uyari
   
   //webhookları yönet
   if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = emotes.basarili
   if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = emotes.uyari
if(dil== 'tr' || dil== undefined){
    let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(` ${x} Yönetici \n${x2} Denetim Kaydını Görüntüle\n ${x3} Sunucuyu Yönet \n${x4} Rolleri Yönet \n${x5} Kanalları Yönet \n${x6} Üyeleri At \n${x7} Üyeleri Yasakla \n${x8} Mesajları Yönet \n${x9} Kullanıcı Adlarını Yönet \n${x10} Emojileri Yönet \n${x11} Webhook'ları Yönet`);
    msg.channel.send(embed);
}
if(dil == 'en'){
    let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(` ${x} Executive \n${x2} View Audit Log \n ${x3} Manage Server \n${x4} Manage Roles \n${x5} Manage Channels \n${x6} Kick Members \n${x7} Ban Members \n${x8} Manage Messages \n${x9} Manage User Nickname \n${x10}  Manage Emojis \n${x11} Manage Webhooks`);
    msg.inlineReply(embed);
}
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilerim', 'perms'],
  permLevel: 0,
    kategori: "kullanıcı"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};