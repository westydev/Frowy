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
    let newreason = args.slice(1).join(' ') ? args.slice(2).join(' ') : "Sebep Belirtilmedi"
let personne = await db.get(`${args[0]}.${message.guild.id}.user`)
 db.set(`${args[0]}.${message.guild.id}.reason`, newreason)
db.set(`warnings.${message.guild.id}.${personne}.reason`, newreason)
  
}
exports.conf = {
aliases: ["uyarıeditle"]
}
exports.help = {
    name: "editwarn"
}