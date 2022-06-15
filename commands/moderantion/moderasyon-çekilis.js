
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
////////modules
const { MessageEmbed } = require('discord.js')
const ms = require('ms');
const db = require("quick.db")
////////modules

exports.run = async (client, message, args) => {
    var dil = db.fetch(`lang_${message.guild.id}`)
    if(dil == 'tr' || dil == undefined) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(mesajtr.adminnoperm);
        if(!args[0]) return message.inlineReply(` Bir zaman belirtmelisin!`)
                if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) return message.inlineReply(` Yanlış zaman girdiniz!`)
                if(isNaN(args[0][0])) return message.inlineReply(`Bu bir rakam değil!`)
                let channel = message.mentions.channels.first()
                if(!channel) return message.inlineReply(`Bir kanal etiketlemelisin!`)
                let prize = args.slice(2).join(" ")
                if(!prize) return message.inlineReply(`Bir ödül belirtmelisin!`)
                message.inlineReply(`Çekiliş ${channel} kanalında başarıyla başladı!`)
                let Embed = new MessageEmbed()
                .setTitle(` Çekiliş! `)
                .setDescription(`Çekilişi ${message.author} adlı kullanıcı yapıyor.\nÖdülü ise **${prize}** olarak belirledi!`)
                .setFooter(`Bitiş ->`)
                .setTimestamp(Date.now()+ms(args[0]))
                .setColor(`RANDOM`)
                let m = await channel.send(Embed)
                m.react("860273344322732063")
                setTimeout(() => {
                    if(m.reactions.cache.get("860273344322732063").count<=1){
                        message.inlineReply(` Çekilişe katılan kişi sayısı: ${m.reactions.cache.get("860273344322732063").count}`)
                        return message.inlineReply(`Çekilişe yeterli kişi katılmadı!`)
                    }
                    
                    let winner = m.reactions.cache.get("860273344322732063").users.cache.filter(u=>!u.bot).random()
                    channel.send(` **${prize}** çekilişinin kazananı -> ${winner}`)
                }, ms(args[0]));
    }
    if(dil == 'en') {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(mesajen.adminnoperm);
        if(!args[0]) return message.inlineReply(`You must specify a time!`)
                if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) return message.inlineReply(` You entered the wrong time!`)
                if(isNaN(args[0][0])) return message.inlineReply(`This is not a number!`)
                let channel = message.mentions.channels.first()
                if(!channel) return message.inlineReply(`You have to tag a channel!`)
                let prize = args.slice(2).join(" ")
                if(!prize) return message.inlineReply(`You must specify a prize!`)
                message.inlineReply(`The raffle started successfully on the ${channel} channel!`)
                let Embed = new MessageEmbed()
                .setTitle(`Giveaway `)
                .setDescription(`The user named Giveaway ${message.author} is doing it. \n Set the reward as ** ${outlet} **!`)
                .setFooter(`Finish ->`)
                .setTimestamp(Date.now()+ms(args[0]))
                .setColor(`RANDOM`)
                let m = await channel.send(Embed)
                m.react("860273344322732063")///ve çekilişşşş
                setTimeout(() => {
                    if(m.reactions.cache.get("860273344322732063").count<=1){
                        message.inlineReply(` Number of people participating in the Giveaway : ${m.reactions.cache.get ("860273344322732063"). Count}`)
                        return message.inlineReply(`Not enough people participated in the Giveaway!`)
                    }
                    
                    let winner = m.reactions.cache.get("860273344322732063").users.cache.filter(u=>!u.bot).random()
                    channel.send(`** The winner of the ${prize} ** Giveaway -> ${winner}`)
                }, ms(args[0])); 
    }
    }
exports.conf = {
	enabled:false,
	guildOnly: false,
	aliases: ["giveaway"],
	permLevel: 0,
}

exports.help = {
	name: 'çekiliş',
	description: '',
	usage: ''
}