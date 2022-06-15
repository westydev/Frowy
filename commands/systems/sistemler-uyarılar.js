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
    if(!args[0]) return
    let personne = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!personne) message.inlineReply("Kişi etiketle")
    let res;
    let warns = db.get(`warnings.${message.guild.id}.${personne.id}`) ?  
res =  db.get(`warnings.${message.guild.id}.${personne.id}`).map((a, b) => `\`${a}.\` Yetkili: ${b.staff}\nKanal: ${b.channel}\nSebep: ${b.reason}\nTarih: ${b.date}\nBu Uyarı Sunucudaki \`${b.warningNumber}.\` Uyarı`) : res = "Kullanıcıya Ait Veri Bulunamadı"
message.inlineReply(res)
}
exports.conf = {
aliases: ["uyarılar"]
}
exports.help = {
    name: "warns"
}