//Dependencies
const Discord = require('discord.js')
const db = require("quick.db")
const chalk = require('chalk');
const fs = require('fs');
const express = require("express")
const moment = require('moment');
const { MessageEmbed } = require("discord.js");
require("moment-duration-format");
const client = new Discord.Client();
const dbuttons = require("discord-buttons");
const mongoose = require("mongoose");
dbuttons(client);
const { MessageMenu, MessageMenuOption } = require('discord-buttons');



////////configs
const ayarlar = require('./config/config.json');
const mesajtr = require('./config/mesajlartr.json');
const mesajen = require('./config/mesajlaren.json');
const logschannel = require('./config/logschannel.json');
const colors = require('./config/colors.json')
const emotes = require("./config/emotes.json")
////Starts
require('./util/eventLoader')(client);
require("./Functions/inlinereply")
//Prefix
var prefix = ayarlar.prefix;
//App

const app = express()
//Missing Permission
app.get("/foo", (req, res, next) => {
    const foo = JSON.parse(req.body.jsonString)
})
process.on("unhandledRejection", (reason, promise) => {})
//Logger
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

let duration1 = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
//Commands Handlers
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
   if (err) console.error(err);
   files.forEach(f => {
 fs.readdir(`./commands/${f}/`, (err, filess) => {
   if (err) console.error(err);
   log(`${f} Klasöründen ${filess.length} Komut Yüklenecek;`);
   filess.forEach(fs => {
     let props = require(`./commands/${f}/${fs}`);
     log(`${props.help.name} // Yüklendi`);
     client.commands.set(props.help.name, props);
     props.conf.aliases.forEach(alias => {
       client.aliases.set(alias, props.help.name);
     });
    });
   });
  });
 });

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
  
client.login(ayarlar.token);
////////EKLENDIM///////
////////EKLENDIM///////
////////EKLENDIM///////
client.on('guildCreate', guild => {

  let embedadd = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setTitle(" Bot Eklendi ")
  .addField("Sunucu Adı:", guild.name)
  .addField("Sunucu sahibi", guild.owner)
  .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
  .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
  .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
  
     client.channels.cache.get(logschannel.botadd).send(embedadd);
  
  });
////////EKLENDIM///////
////////EKLENDIM///////
////////EKLENDIM///////


/////////ATILDIM//////////
/////////ATILDIM//////////
/////////ATILDIM//////////

/////////ATILDIM//////////
/////////ATILDIM//////////
/////////ATILDIM//////////
////////////////sayac/////////////////////////
////////////////sayac/////////////////////////
////////////////sayac/////////////////////////
////////////////sayac/////////////////////////
////////////////sayac/////////////////////////
client.on("guildMemberAdd", async member => {
  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!kanal) return;
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacHG_${member.guild.id}`);
  ///....

  ///....
  if (!mesaj) {
    return client.channels.cache
      .get(kanal)
      .send(
        " `" +
        member.user.username +
        "`**Adlı Kullanıcı Aramıza Katıldı!** `" +
        sayaç +
        "` **Kişi Olmamıza** `" +
        sonuç +
        "` **Kişi Kaldı.** `" +
        member.guild.memberCount +
        "` **Kişiyiz!**"
      );
  }

  if (member.guild.memberCount == sayaç) {
    return client.channels
      .get(kanal)
      .send(
        ` **Sayaç Sıfırlandı!** \`${member.guild.memberCount}\` **Kişiyiz!**`
      );
  }
  if (mesaj) {
    const mesaj31 = mesaj
      .replace("-uyetag-", `${member.user.tag}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.size}`)
      .replace("-kalanuye-", `${sonuç}`)
      .replace("-hedefuye-", `${sayaç}`);
    return client.channels.cache.get(kanal).send(mesaj31);
  }
});

client.on("guildMemberRemove", async member => {
  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacBB_${member.guild.id}`);
  if (!kanal) return;
  if (!sayaç) return;
  ///....

  if (!mesaj) {
    return client.channels.cache
      .get(kanal)
      .send(
        " `" +
        member.user.username +
        "` **Adlı Kullanıcı Aramızdan Ayrıldı.**`" +
        sayaç +
        "` **Kişi Olmamıza** `" +
        sonuç +
        "` **Kişi Kaldı.** `" +
        member.guild.memberCount +
        "` **Kişiyiz!**"
      );
  }

  if (mesaj) {
    const mesaj31 = mesaj
      .replace("-uye-", `${member.user.tag}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.cache.size}`)
      .replace("-kalanuye-", `${sonuç}`)
      .replace("-hedefuye-", `${sayaç}`);
    return client.channels.cache.get(kanal).send(mesaj31);
  }
});
////////////////sayac/////////////////////////
////////////////sayac/////////////////////////
////////////////sayac/////////////////////////
////////////////sayac/////////////////////////
////////////////sayac/////////////////////////


///////////////////guard//////////////////////////
///////////////////guard//////////////////////////
///////////////////guard//////////////////////////
///////////////////guard//////////////////////////
///////////////////guard//////////////////////////
///////////////////guard//////////////////////////
///////////////////guard//////////////////////////
client.on("roleCreate", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());
  let rol = await db.fetch(`rolrol_${role.guild.id}`);
  if (!role.guild) return;
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == role.guild.owner.id) return;
    role.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Rol Açıldı!`)
      .setColor("BLACK")
      .addField(`Açan`, entry.executor.tag)
      .addField(`Açılan Rol`, role.name)
      .addField(`Sonuç`, `Rol Geri Silindi!`);
    client.channels.cache.get(kanal).send(embed);
});

client.on("channelDelete", async channel => {
  if (!channel.guild) return;
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (!kanal) return;
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.guild.channels.create(channel.name, channel.type, [
      {
        id: channel.guild.id,
        position: channel.calculatedPosition
      }
    ]);
    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Silindi!`)
      .addField(`Silen`, entry.executor.tag)
      .addField(`Silinen Kanal`, channel.name)
      .addField(`Sonuç`, `Kanal Geri Açıldı!`)
      .setColor("BLACK");
    client.channels.cache.get(kanal).send(embed);
});

client.on("channelCreate", async channel => {
  if (!channel.guild) return;
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (!kanal) return;
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_CREATE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Açıldı!`)
      .setColor("BLACK")
      .addField(`Açan`, entry.executor.tag)
      .addField(`Açılan Kanal`, channel.name)
      .addField(`Sonuç`, `Kanal Geri Silindi!`);
    client.channels.cache.get(kanal).send(embed);
});

client.on("guildBanAdd", async (guild, user) => {
  if (!guild) return;
  let kanal = await db.fetch(`bank_${guild.id}`);
  let rol = await db.fetch(`banrol_${guild.id}`);
  if (!kanal) return;
    const entry = await guild
      .fetchAuditLogs({ type: "GUILD_BAN_ADD" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == guild.owner.id) return;
    guild.members.unban(user.id);
    guild.members.cache.get(entry.executor.id).kick();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Biri Yasaklandı!`)
      .setColor("BLACK")
      .addField(`Yasaklayan`, entry.executor.tag)
      .addField(`Yasaklanan Kişi`, `${user}`)
      .addField(
        `Sonuç`,
        `Yasaklayan kişi sunucudan açıldı!\nve yasaklanan kişinin yasağı kalktı!`
      );
    client.channels.cache.get(kanal).send(embed);  
});

client.on("roleDelete", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  let rol = await db.fetch(`rolrol_${role.guild.id}`);
  if (!role.guild) return;
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == role.guild.owner.id) return;
    role.guild.roles
      .create({
        data: {
          name: role.name
        }
      })
      .then(r => r.setPosition(role.position));

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Rol Silindi!`)
      .setColor("BLACK")
      .addField(`Silen`, entry.executor.tag)
      .addField(`Silinen Rol`, role.name)
      .addField(`Sonuç`, `Rol Geri Açıldı!`);
    client.channels.cache.get(kanal).send(embed);
});
///////////////////guard//////////////////////////
///////////////////guard//////////////////////////
///////////////////guard//////////////////////////
///////////////////guard//////////////////////////
///////////////////guard//////////////////////////
///////////////////guard//////////////////////////
///////////////////guard//////////////////////////




/////////////////////dm log/////////////////////////////
/////////////////////dm log/////////////////////////////
/////////////////////dm log/////////////////////////////
/////////////////////dm log/////////////////////////////
/////////////////////dm log/////////////////////////////
client.on("message", msg => {
  var dm = client.channels.cache.get(logschannel.dmlog)
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    let botdm = new Discord.MessageEmbed()
      .setTitle(`🔔 Yeni Bir Mesajım Var`)
      .setTimestamp()
      .setColor(colors.mavi)
      .addField("Gönderen", msg.author.tag)
      .addField("Gönderen ID", msg.author.id)
      .addField("Gönderilen Mesaj", msg.content)
       dm.send(botdm)
        }
  if (msg.channel.bot) return;
});
/////////////////////dm log/////////////////////////////
/////////////////////dm log/////////////////////////////
/////////////////////dm log/////////////////////////////
/////////////////////dm log/////////////////////////////
/////////////////////dm log/////////////////////////////






/////////////////////afk/////////////////////////////
/////////////////////afk/////////////////////////////
/////////////////////afk/////////////////////////////
/////////////////////afk/////////////////////////////
/////////////////////afk/////////////////////////////
client.on("message", async (message) => {
  if (message.author.bot) return;
  if (db.has(`afk-${message.author.id}+${message.guild.id}`)) {
    let info = db.get(`afk-${message.author.id}+${message.guild.id}`);
    db.delete(`afk-${message.author.id}+${message.guild.id}`);
    if (message.guild.owner.id !== message.author.id) {
      message.member.setNickname(null)
    }
    message.channel.send(`Hoş geldin ${message.author}, AFK'nı kaldırdım`);
  }
  if (message.mentions.members.first()) {
    if (
      db.has(
        `afk-${message.mentions.members.first().id}+${message.guild.id}`
      )
    ) {
      message.channel.send(
        `${message.mentions.members.first().user.tag} Adlı kullanıcı AFK: ` +
        db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`)
      );
    } else return;
  } else;
})
/////////////////////afk/////////////////////////////
/////////////////////afk/////////////////////////////
/////////////////////afk/////////////////////////////
/////////////////////afk/////////////////////////////
/////////////////////afk/////////////////////////////















//////////////////////Register System////////////////////
//////////////////////Register System////////////////////
//////////////////////Register System////////////////////
//////////////////////Register System////////////////////
//////////////////////Register System////////////////////
//////////////////////Register System////////////////////
//////////////////////Register System////////////////////


client.on("guildMemberAdd", async member => {
  let guild = member.guild;
  let kanal = db.fetch(`kayıthg_${member.guild.id}`);
  let kayıtçı = db.fetch(`kayıtçırol_${member.guild.id}`);
  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;
  let user = client.users.cache.get(member.id);
  require("moment-duration-format");
  let kurulus = new Date().getTime() - user.createdAt.getTime();
  let ayyy = moment.duration(kurulus).format("M");
  var kontrol = [];
  if (ayyy < 1) {
    kontrol = `**Şüpheli** ${emotes.uyari} `;
  }
  if (ayyy > 1) {
    kontrol = `**Güvenilir** ${emotes.basarili} `;
  }
  if (!kanal) return;
  ///////////////////////
  let gif = db.fetch(`kayıtgif_${guild.id}`)
  ///////////////////
  if (!gif) gif = "https://cdn.discordapp.com/attachments/867075670626533407/879665274075381760/standard.gif"
  let embed = new Discord.MessageEmbed()
    .setColor("36393F")
    .setImage(`${gif}`)
    .setThumbnail(
      user.avatarURL({
        dynamic: true,
      })
    )
    .setDescription(
      `${emotes.yukleniyor}  **Hoşgeldin!** ${member.user
      }, seninle beraber **${guild.memberCount
      }** kişi olduk! \n  Kaydının yapılması için  **İsim** ve **Yaş** Yazman Gerek. \n   Hesap Kuruluş: **${moment(
        user.createdAt
      ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(
        user.createdAt
      ).format(
        "YYYY HH:mm:ss"
      )}** \n  Bu vatandaş: ${kontrol} \n  <@&${kayıtçı}> Rolündeki Yetkililer Sizinle İlgilecektir

  `);


  client.channels.cache.get(kanal).send(`<@&${kayıtçı}>`, embed);
// client.channels.cache.get(kanal).send(`<@&${kayıtçı}>`);
});


//////////////////////Register System////////////////////
//////////////////////Register System////////////////////
//////////////////////Register System////////////////////
//////////////////////Register System////////////////////
//////////////////////Register System////////////////////
//////////////////////Register System////////////////////
//////////////////////Register System////////////////////







































client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (!oldMessage.guild) return;
  let modlog = await db.fetch(`log_${newMessage.guild.id}`);
  if (!modlog) return;
  let embed = new Discord.MessageEmbed()
    .setAuthor(oldMessage.author.username, oldMessage.author.avatarURL())
    .addField("**Eylem**", "Mesaj Düzenleme")
    .addField("**Mesajın sahibi**", `<@${oldMessage.author.id}> === **${oldMessage.author.id}**`)
    .addField("**Eski Mesajı**", `${oldMessage.content}`)
    .addField("**Yeni Mesajı**", `${newMessage.content}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`Sunucu: ${oldMessage.guild.name} - ${oldMessage.guild.id}`, oldMessage.guild.iconURL())
    .setThumbnail(oldMessage.guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
});

client.on("channelCreate", async (channel) => {
  if (!channel.guild) return;
  let modlog = await db.fetch(`log_${channel.guild.id}`);
  if (!modlog) return;
  const entry = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_CREATE' }).then(audit => audit.entries.first());
  let kanal;
  if (channel.type === "text") kanal = `<#${channel.id}>`
  if (channel.type === "voice") kanal = `\`${channel.name}\``
  let embed = new Discord.MessageEmbed()
    .setAuthor(entry.executor.username, entry.executor.avatarURL())
    .addField("**Eylem**", "Kanal Oluşturma")
    .addField("**Kanalı Oluşturan Kişi**", `<@${entry.executor.id}>`)
    .addField("**Oluşturduğu Kanal**", `${kanal}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`Sunucu: ${channel.guild.name} - ${channel.guild.id}`, channel.guild.iconURL())
    .setThumbnail(channel.guild.iconUR)
  client.channels.cache.get(modlog).send(embed)
})

client.on("channelDelete", async (channel) => {
  if (!channel.guild) return;
  let modlog = await db.fetch(`log_${channel.guild.id}`);
  if (!modlog) return;
  const entry = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setAuthor(entry.executor.username, entry.executor.avatarURL())
    .addField("**Eylem**", "Kanal Silme")
    .addField("**Kanalı Silen Kişi**", `<@${entry.executor.id}>`)
    .addField("**Silinen Kanal**", `\`${channel.name}\``)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`Sunucu: ${channel.guild.name} - ${channel.guild.id}`, channel.guild.iconURL())
    .setThumbnail(channel.guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})

client.on("roleCreate", async (role) => {
  if (!role.guild) return;
  let modlog = await db.fetch(`log_${role.guild.id}`);
  if (!modlog) return;
  const entry = await role.guild.fetchAuditLogs({ type: 'ROLE_CREATE' }).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setAuthor(entry.executor.username, entry.executor.avatarURL())
    .addField("**Eylem**", "Rol Oluşturma")
    .addField("**Rolü oluşturan kişi**", `<@${entry.executor.id}>`)
    .addField("**Oluşturulan rol**", `\`${role.name}\` **=** \`${role.id}\``)
    .setTimestamp()
    .setFooter(`Sunucu: ${role.guild.name} - ${role.guild.id}`, role.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail(role.guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})

client.on("roleDelete", async (role) => {
  if (!role.guild) return;
  let modlog = await db.fetch(`log_${role.guild.id}`);
  if (!modlog) return;
  const entry = await role.guild.fetchAuditLogs({ type: 'ROLE_DELETE' }).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setAuthor(entry.executor.username, entry.executor.avatarURL())
    .addField("**Eylem**", "Rol Silme")
    .addField("**Rolü silen kişi**", `<@${entry.executor.id}>`)
    .addField("**Silinen rol**", `\`${role.name}\` **=** \`${role.id}\``)
    .setTimestamp()
    .setFooter(`Sunucu: ${role.guild.name} - ${role.guild.id}`, role.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail(role.guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})

client.on("emojiCreate", async (emoji) => {
  if (!emoji.guild) return;
  let modlog = await db.fetch(`log_${emoji.guild.id}`);
  if (!modlog) return;
  const entry = await emoji.guild.fetchAuditLogs({ type: 'EMOJI_CREATE' }).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setAuthor(entry.executor.username, entry.executor.avatarURL())
    .addField("**Eylem**", "Emoji Oluşturma")
    .addField("**Emojiyi oluşturan kişi**", `<@${entry.executor.id}>`)
    .addField("**Oluşturulan emoji**", `${emoji} - İsmi: \`${emoji.name}\``)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`, emoji.guild.iconURL)
    .setThumbnail(emoji.guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})

client.on("emojiDelete", async (emoji) => {
  if (!emoji.guild) return;
  let modlog = await db.fetch(`log_${emoji.guild.id}`);
  if (!modlog) return;
  const entry = await emoji.guild.fetchAuditLogs({ type: 'EMOJI_DELETE' }).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setAuthor(entry.executor.username, entry.executor.avatarURL())
    .addField("**Eylem**", "Emoji Silme")
    .addField("**Emojiyi silen kişi**", `<@${entry.executor.id}>`)
    .addField("**Silinen emoji**", `${emoji}`)
    .setTimestamp()
    .setFooter(`Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`, emoji.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail(emoji.guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})

client.on("emojiUpdate", async (oldEmoji, newEmoji) => {
  if (!oldEmoji.guild) return;
  let modlog = await db.fetch(`log_${oldEmoji.guild.id}`);
  if (!modlog) return;
  const entry = await oldEmoji.guild.fetchAuditLogs({ type: 'EMOJI_UPDATE' }).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setAuthor(entry.executor.username, entry.executor.avatarURL())
    .addField("**Eylem**", "Emoji Güncelleme")
    .addField("**Emojiyi güncelleyen kişi**", `<@${entry.executor.id}>`)
    .addField("**Güncellenmeden önceki emoji**", `${oldEmoji} - İsmi: \`${oldEmoji.name}\``)
    .addField("**Güncellendikten sonraki emoji**", `${newEmoji} - İsmi: \`${newEmoji.name}\``)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`Sunucu: ${oldEmoji.guild.name} - ${oldEmoji.guild.id}`, oldEmoji.guild.iconURL)
    .setThumbnail(oldEmoji.guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})

client.on("guildBanAdd", async (guild, user) => {
  if (!guild) return;
  let modlog = await db.fetch(`log_${guild.id}`);
  if (!modlog) return;
  const entry = await guild.fetchAuditLogs({ type: "MEMBER_BAN_ADD" }).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setAuthor(entry.executor.username, entry.executor.avatarURL())
    .addField("**Eylem**", "Yasaklama")
    .addField("**Kullanıcıyı yasaklayan yetkili**", `<@${entry.executor.id}>`)
    .addField("**Yasaklanan kullanıcı**", `**${user.tag}** - ${user.id}`)
    .addField("**Yasaklanma sebebi**", `${entry.reason}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)
    .setThumbnail(guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})

client.on("guildBanRemove", async (guild, user) => {
  if (!guild) return;
  let modlog = await db.fetch(`log_${guild.id}`);
  if (!modlog) return;
  const entry = await guild.fetchAuditLogs({ type: "MEMBER_BAN_REMOVE" }).then(audit => audit.entries.first());
  let embed = new Discord.MessageEmbed()
    .setAuthor(entry.executor.username, entry.executor.avatarURL())
    .addField("**Eylem**", "Yasak kaldırma")
    .addField("**Yasağı kaldıran yetkili**", `<@${entry.executor.id}>`)
    .addField("**Yasağı kaldırılan kullanıcı**", `**${user.tag}** - ${user.id}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)
    .setThumbnail(guild.iconURL)
  client.channels.cache.get(modlog).send(embed)
})



