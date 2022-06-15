const Discord = require('discord.js');

////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs

exports.run = async (client, message, args) => {
  
  if (message.deletable) await message.delete();
  if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.channel.send(mesajtr.managemessagenoperm).then(a => a.delete({timeout: 4500}));
  
  let ÇekilecekKullanıcı = args[0];
  if (!ÇekilecekKullanıcı) return message.channel.send(`${message.author} Bir kullanıcı ID'si girmelisin.`).then(a => a.delete({timeout: 4500}));
  if(!Number(ÇekilecekKullanıcı)) return message.channel.send(`${message.author} Kullanıcı ID'leri rakam ile yazılmalı.`).then(a => a.delete({timeout: 4500}));

  let YazılacakMesaj = args.slice(1).join(' ');
  if (!YazılacakMesaj) return message.channel.send(`${message.author} ID'sini girdiğin kullanıcı ne yazsın?`).then(a => a.delete({timeout: 4500}));
  
  if (YazılacakMesaj.includes("@everyone")) return message.channel.send(`${message.author} Everyone mu? Severiz, şaka şaka bir daha bunu yapma.`).then(a => a.delete({timeout: 4500}));
  if (YazılacakMesaj.includes("@here")) return message.channel.send(`${message.author} Here mi? Severiz, şaka şaka bir daha bunu yapma.`).then(a => a.delete({timeout: 4500}));
  
  let Kullanıcı = await client.users.fetch(ÇekilecekKullanıcı);
  try { 
  message.channel.createWebhook(Kullanıcı.username, {
      avatar: Kullanıcı.avatarURL()}) 
    .then(async (wb) => {
        const Webhook = new Discord.WebhookClient(wb.id, wb.token);
        await Webhook.send(YazılacakMesaj); 
        setTimeout(() => {
          Webhook.delete()
        }, 2000);
    })  
  } catch (err) {
    message.channel.send(err);
};
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
 
};

exports.help = {
  name: 'fake-mesaj',
};