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
    let personne = db.get(`${args[0]}.${message.guild.id}.user`)
 db.delete(`warnings.${message.guild.id}.${personne}`)
db.delete(`${args[0]}.${message.guild.id}`)
message.reply("başarılı")
}
exports.conf = {
aliases: ["uyarısil"]
}
exports.help = {
    name: "deletewarn"
}