const Discord = require("discord.js")
const client = new Discord.Client()
const db = require("quick.db")


module.exports = async message => {
    if (message.author.bot || message.channel.type == "dm") return;
    if (!message.guild) return;
    let log = message.guild.channels.cache.get(await db.fetch(`log_${message.guild.id}`));
    if (!log) return;
    let embed = new Discord.MessageEmbed()
      .setTitle(message.author.username + " | Mesaj Silindi")
      .addField("Kullanıcı: ", message.author)
      .addField("Kanal: ", message.channel)
      .addField("Mesaj: ", "" + message.content + "")
    log.send(embed)
}