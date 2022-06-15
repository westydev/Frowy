const disbut = require("discord-buttons")
const Discord = require("discord.js")
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
const talkedRecently = new Set();
exports.run = async (client, message, args) => {
  if (talkedRecently.has(message.author.id)) {
    return message.channel.send("`1` Saat de Bir Kullanabilirsin - " + `<@${message.author.id}>`);
} else {

    // the user can type the command ... your command code goes here :)

 // Adds the user to the set so that they can't talk for a minute
 talkedRecently.add(message.author.id);
 setTimeout(() => {
 message.delete();
   // Removes the user from the set after a minute
   talkedRecently.delete(message.author.id);
 }, 3600000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
}
  let user = client.users.cache.get("840695080075526164");

  if (message.author.bot) return;
        message.channel.send(`Data loading...`).then(async msj => {
            const botPing = (msj.createdTimestamp - message.createdTimestamp);
            msj.delete();
        const btn1 = new disbut.MessageMenuOption()
            .setLabel('Güvenlik Sorunu')
            .setDescription("Güvenlik Sorunu Varsa Basınız ")
            .setValue('1')
            .setEmoji("869707733509746718")
        const btn2 = new disbut.MessageMenuOption()
            .setLabel('Ping Sorunu')
            .setDescription(`Ping Sorunu Varsa Basınız`)
            .setValue('2')
            .setEmoji("869707733685927936")
        const btn3 = new disbut.MessageMenuOption()
            .setLabel('Hatalı komut')
            .setDescription("Hatalı Komut Varsa Basınız")
            .setValue('3')
            .setEmoji("869708003404808203")
        const btn4 = new disbut.MessageMenuOption()
            .setLabel('Öneri')
            .setDescription("Öneri Yapmak İsterseniz Basınız")
            .setEmoji(`869323290341154828`)
            .setValue(`4`)
        const btn5 = new disbut.MessageMenuOption()
            .setLabel('İş Birliği')
            .setDescription("İş Birliği Yapmak isterseniz Basınız")
            .setEmoji(`869323775370465370`)
            .setValue(`5`)
        
            const btn6 = new disbut.MessageMenuOption()
            .setLabel('Bot Ekibine Başvuru')
            .setDescription("Botun Ekibine Katılmak İstiyosanız Basınız")
            .setEmoji(`869323775370465370`)
            .setValue(`6`)


        const menu = new disbut.MessageMenu()
        .addOptions(btn1, btn2, btn3, btn4, btn5, btn6)
        .setMaxValues(1)
        .setMinValues(1)
        .setID("menu")

        const hakkında = new Discord.MessageEmbed()
            .setTitle('Bot Destek Sistem')
            .setDescription(`Bot Hakkında Sorunlarınız Veya Fikirleriniz varsa Seçim Yapabilirsiniz`)
        const embed1 = new Discord.MessageEmbed()
            .setTitle(`Güvenlik Sistemi !`)
            .setDescription(`<@${message.author.id}> idli kişi botun güvenlik sisteminde bir sorun olduğunu belirtdi`)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(user.displayAvatarURL({dynamic: true}))
            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
                        ////////////////////////////////////////////////
            let embed2 = new Discord.MessageEmbed()
            .setTitle(`Ping Sorunu !`)
            .setAuthor(`Ping Sorunu`, client.user.displayAvatarURL({dynamic: true}))
            .setDescription(`<@${message.author.id}> idli kişi botun ping sorunu olduğunu belirtdi. Şuanki Bot pingi \`${botPing}\` `)
            .setThumbnail(user.displayAvatarURL({dynamic: true}))
            .setTimestamp()
            ////////////////////////////////////////////////
            let embed3 = new Discord.MessageEmbed()
            .setTitle(`Hatalı Komut !`)
            .setDescription(`<@${message.author.id}> idli kişi botun komutlarında hata olduğunu belirtdi.`)
            .setAuthor(`Hatalı Komut`, client.user.displayAvatarURL())
            .setThumbnail(user.displayAvatarURL({dynamic: true}))
            .setFooter(`Destek Sistemi`, user.displayAvatarURL({dynamic: true}))
            .setTimestamp()
            ////////////////////////////////////////////////

            let embed4 = new Discord.MessageEmbed()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
            .setTitle(`Öneri Sistemi !`)
            .setThumbnail(user.displayAvatarURL({dynamic: true}))

            .setAuthor(`Öneri Sistemi`, client.user.displayAvatarURL())

            .setDescription(`<@${message.author.id}> idli kişi bot hakkında öneri yapmak istediğini söyledi`)
            ////////////////////////////////////////////////

            let embed5 = new Discord.MessageEmbed()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
            .setTitle(`İşbirliği Sistemi !`)
            .setThumbnail(user.displayAvatarURL({dynamic: true}))

            .setDescription(`<@${message.author.id}> idli kişi işbirliği yapmak istediğini söyledi`)
            .setAuthor(`İşbirliği Sistemi`, client.user.displayAvatarURL())
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
            ////////////////////////////////////////////////

            
            let embed6 = new Discord.MessageEmbed()
            .setTitle(`Ekib Başvurusu !`)
            .setThumbnail(user.displayAvatarURL({dynamic: true}))

            .setAuthor(`Ekib Başvurusut`, client.user.displayAvatarURL())
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
            .setDescription(`<@${message.author.id}> idli kişi bot ekibine başvuru yaptı`)
            let msg = await message.channel.send({ embed: hakkında, component: menu })


        const filter = (menu) => menu.clicker.user.id === message.author.id; //user filter (author only)
        const collector = message.createMenuCollector(filter, { time: 120000 });

        client.on("clickMenu", menu => {
            if(menu.clicker.id !== message.author.id) return;
            menu.reply.defer();
            if (menu.values[0] === '1') {
              client.channels.cache.get(logs.guvenlik).send(embed1)
              msg.delete()
            }
            if (menu.values[0] === '2') {
              client.channels.cache.get(logs.pingg).send(embed2)
              msg.delete()
            }
            if (menu.values[0] === '3') {
              client.channels.cache.get(logs.hatali).send(embed3)
              msg.delete()
            }
            if(menu.values[0] === "4"){
              client.channels.cache.get(logs.oneri).send(embed4)
              msg.delete()
            }
            if(menu.values[0] === "5"){
              client.channels.cache.get(logs.isbirligi).send(embed5)
              msg.delete()
            }
            if(menu.values[0] === '6'){
              client.channels.cache.get(logs.ekibbasvuru).send(embed6)
              msg.delete()
            }
        })
        })
}
exports.conf = {
  aliases: []
}
exports.help = {
    name: "destek",
    description: "Gelişmiş Yardım",
    usage: "<prefix>yardım"
}