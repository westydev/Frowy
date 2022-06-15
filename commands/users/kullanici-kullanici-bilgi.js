const db = require("quick.db")
const Discord = require('discord.js');
const moment = require("moment");
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs

exports.run = async (client, message, args) => {
    var dil = db.fetch(`lang_${message.guild.id}`)
    let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";


    if (dil == 'tr' || dil == undefined) {
        var user = '';
        let member = message.mentions.users.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]);
        let author = message.author;
        if (member) {
            var user = member;
        } else {
            var user = author;
        }
        member = message.guild.member(user);

        let roller = member.roles.cache.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
        let rol = member.roles.cache.filter(m => m.name !== '@everyone').map(m => `<@&${m.id}>`).join(', ')
        if (roller.length < 1) roller = ['Bu kullanıcının hiç rolü yok!'];

        let millisCreated = new Date().getTime() - user.createdAt.getTime();
        let daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün]")
        let millisJoined = new Date().getTime() - member.joinedAt.getTime();
        let userJoined = moment.duration(millisJoined).format("Y [yıl], D [gün]")

        let katılım = moment(user.createdAt).format('DD.MM.YYYY')
        let sunucu = moment(member.joinedAt).format('DD.MM.YYYY')

        if (user.presence.status === "dnd") {
            var durum = '🔴'
        } else if (user.presence.status === "online") {
            var durum = '🟢'
        } else if (user.presence.status === "idle") {
            var durum = "🟡"
        } else {
            var durum = "⚫"
        }

        let rozet = user.flags.toArray()
        let renk = 0xffa300


        const embed = new Discord.MessageEmbed()
            .addField("**Kullanıcı** : ", ` ${user.tag} (${user.id})`, true)
            .addField("**Takma ad : **", `${member.displayName}`, true)
            .addField("**Profil : **", `${member} ${durum}`, true)
            .addField("**Bot profil mi ?**", `${user.bot ? '\n Evet' : 'Hayır'}`, true)
            .addField("**Rozet(ler) : **", `${rozet}`, true)
            .addField("**Hesap oluşturma tarihi : **", `${katılım} [**${daysCreated}** önce]`, true)
            .addField("**Sunucuya giriş tarihi : **", `${sunucu} [**${userJoined}** önce]`, true)
            .addField("**Rol(ler) : **", `[**${member.roles.cache.size}**]: ${rol}`, true)
            .setColor(renk)
        message.inlineReply(embed)
    }




    if(dil == 'en'){
        var user = '';
        let member = message.mentions.users.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]);
        let author = message.author;
        if (member) {
            var user = member;
        } else {
            var user = author;
        }
        member = message.guild.member(user);

        let roller = member.roles.cache.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
        let rol = member.roles.cache.filter(m => m.name !== '@everyone').map(m => `<@&${m.id}>`).join(', ')
        if (roller.length < 1) roller = ['This user has no roles!'];

        const millisCreated = new Date().getTime() - user.createdAt.getTime();
        const daysCreated = moment.duration(millisCreated).format("Y [year], D [day]")
        const millisJoined = new Date().getTime() - member.joinedAt.getTime();
        const userJoined = moment.duration(millisJoined).format("Y [year], D [day]")

        let katılım = moment(user.createdAt).format('DD.MM.YYYY')
        let sunucu = moment(member.joinedAt).format('DD.MM.YYYY')

        if (user.presence.status === "dnd") {
            var durum = '🔴'
        } else if (user.presence.status === "online") {
            var durum = '🟢'
        } else if (user.presence.status === "idle") {
            var durum = "🟡"
        } else {
            var durum = "⚫"
        }

        let rozet = user.flags.toArray()
        let renk = 0xffa300


        const embed = new Discord.MessageEmbed()
            .addField("**User : **  ", ` ${user.tag} (${user.id})`, true)
            .addField("** Nickname : **", `${member.displayName}`, true)
            .addField("**Profil : **", `${member} ${durum}`, true)
            .addField("**Bot profile? **", `${user.bot ? '\n Yes' : 'No'}`, true)
            .addField("**Badge(s) : **", `${rozet}`, true)
            .addField("**Account creation date : **", `${katılım} [**${daysCreated}** before]`, true)
            .addField("**Server login date: **", `${sunucu} [**${userJoined}** before]`, true)
            .addField("**Role(s) : **", `[**${member.roles.cache.size}**]: ${rol}`, true)
            .setColor(renk)
        message.inlineReply(embed)
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kullanıcı-bilgi", "kullanicibilgi", "user-stats", "user-info"],
    permLevel: 0,
};
exports.help = {
    name: 'kullanıcı-bilgi',
    usage: 'kullanımı',
    description: 'açıklama',
};