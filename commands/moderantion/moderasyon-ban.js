const Discord = require('discord.js');
const db = require("quick.db")
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs

exports.run = async(client, message, args) => {
  var dil = db.fetch(`lang_${message.guild.id}`)
  var guild = message.guild;
  var banlayan = message.author.tag;
  let banxx = await message.guild.fetchBans();
  if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply(mesajtr.bot_no_ban_perm);
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(mesajtr.bannoperm);
 
  var kisi = message.mentions.users.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]);
  if (dil == 'tr' || dil == undefined) {
    if(!kisi) return message.reply("Banlayacağım Kişiyi Belirtmen Gerekiyor `ID / @kullanici / username`")
 var sebeb = args.slice(1).join(" ");


    if(message.author == kisi) return message.reply("Kendini Yasaklayamazsın!")
    if (banxx.get(kisi.id)) return message.reply(":x: Kişi Zaten Yasaklanmış!")

 var now = new Date()
 if (!sebeb) {
         try {
          guild.members.ban(kisi, { reason: sebeb/*, days: gun*/});
        } catch (error) {
          message.reply(mesajtr.boterror)
          console.log(error)
        }
 } else {
 try {
   kisi.send(`${kisi}  **${guild}** adlı sunucudan banlandınız. \nNedeni: **${sebeb}**`)
   message.inlineReply(`**${kisi} banlandı. \nNedeni: ${sebeb}**`)
   guild.members.ban(kisi, { reason: sebeb/*, days: gun*/});
 } catch (error) {
   message.reply(mesajtr.boterror)
   console.log(error)
 }

 }
  }
  if(dil == 'en') {
    if(!kisi) return message.reply("You Need to Specify the Person I Will Ban, You Need to Specify the Person `ID / @username / username`")
 var sebeb = args.slice(1).join(" ");


    if(message.author == kisi) return message.reply("You Can't Ban Yourself!")
    if (banxx.get(kisi.id)) return message.reply(":x: Person Already Banned!")

 var now = new Date()
 if (!sebeb) {
         try {
          guild.members.ban(kisi, { reason: sebeb/*, days: gun*/});
        } catch (error) {
          message.reply(mesajtr.boterror)
          console.log(error)
        }
 } else {
 try {
   guild.members.ban(kisi, { reason: sebeb/*, days: gun*/});
 } catch (error) {
   message.reply(mesajtr.boterror)
   console.log(error)
 }

 }
  }
};


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Botun Pingini Gösterir !',
  usage: 'ban'
};