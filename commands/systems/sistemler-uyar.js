const dc = require("discord.js")
const db = require("quick.db")
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply(mesajtr.adminnoperm)
let personne = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!personne) message.inlineReply("Kişi etiketle") //evet personne yaptım fransızca biliyorum :sunglaso:
let reason = args.slice(1).join(' ') ? args.slice(2).join(' ') : "Sebep Belirtilmedi"
let date = new Date();
let gün = parseInt(date.getDay()) + 1;
let ay = parseInt(date.getMonth()) + 1;
let yıl = date.getFullYear();
if(gün.toString().length < 2) gün = "0" + gün
if(ay.toString().length < 2) ay = "0" + ay
let Noirsdate = `${gün} / ${ay} / ${yıl}`
let uyarı_numarası = db.get(`uyarıNumarası.${message.guild.id}`) || 1
let pushed = {
   staff: message.author.id,
   user: personne.id,
   reason: reason,
   date: Noirsdate,
   guild: message.guild.id,
   warningNumber: uyarı_numarası
}
db.push(`${uyarı_numarası}.${message.guild.id}`, pushed)//uyarı numarasına push için
db.push(`warnings.${message.guild.id}.${personne.id}`, pushed)// kişiden uyarıyı çekebilmek için
db.add(`uyarıNumarası.${message.guild.id}`, 1)//uyarı numarasını arttırmak için
message.inlineReply("işlem başarılı").then(m => m.react("👍"))

}
exports.conf = {
aliases: ["uyarı","uyar"]
}
exports.help = {
    name: "warn"
}