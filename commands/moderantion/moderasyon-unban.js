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
 ///////
///////
///////
 var kisi = message.mentions.users.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]);
 if (dil == 'tr' || dil == undefined) {
  if(!kisi) return message.reply("Banını Açacağım Kişiyi Beirtmen Gerek Kişiyi Belirtmen Gerekiyor `ID / @kullanici / username`")
  var neden = args.slice(1).join(' ') 
  let banxx = await message.guild.fetchBans();
 if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(mesajtr.bannoperm);
 if (!banxx.get(kisi.id)) return message.reply(":x: Kişi Yasaklanmamış")
 
 if(neden) {
   try {
   await message.inlineReply(`${kisi.tag} adlı kullanıcının banı açıldı. \nNedeni: **${neden}**`)
   await guild.members.unban(kisi.id, neden);
 } catch (error) {
   message.reply(mesajtr.boterror)
   console.log(error)
 }
 } else {
   try {
     await message.inlineReply(`${kisi.tag} adlı kullanıcının banı açıldı.`)
     await guild.members.unban(kisi.id, neden);
   } catch (error) {
     message.reply(mesajtr.boterror)
     console.log(error)
   }
 
 }
 }
///////
///////
///////
///////
if(dil == 'en') {
  if(!kisi) return message.reply("You Need to Specify the Person I Will Unban, You Need to Specify the Person `ID / @user / username`")
  var neden = args.slice(1).join(' ') 
  let banxx = await message.guild.fetchBans();
 if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(mesajtr.bannoperm);
 if (!banxx.get(kisi.id)) return message.reply(":x: Person Not Banned")
 
 if(neden) {
   try {
   await message.inlineReply(`${kisi.tag} Ban has been opened. \nReason: **${neden}**`)
   await guild.members.unban(kisi.id, neden);
 } catch (error) {
   message.reply(mesajtr.boterror)
   console.log(error)
 }
 } else {
   try {
     await message.inlineReply(`${kisi.tag} Ban has been opened.`)
     await guild.members.unban(kisi.id, neden);
   } catch (error) {
     message.reply(mesajtr.boterror)
     console.log(error)
   }
 
 }
 }
};


exports.conf = {
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Botun Pingini Gösterir !',
  usage: 'unban'
};
