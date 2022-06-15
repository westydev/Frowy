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
let number = await db.get(`${args[0]}.${message.guild.id}.warningNumber`)
db.delete(`${number}.${message.guild.id}`)
db.delete(`warnings.${message.guild.id}.${personne}`)
}
exports.conf = {
aliases: ["uyarılarısil"]
}
exports.help = {
    name: "clearwarns"
}