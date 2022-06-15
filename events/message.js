const ayarlar = require('../config/config.json');
const logschannel = require('../config/logschannel.json');
const Discord = require("discord.js");
const db = require("quick.db");
const frowy = ""
const { JsonDatabase } = require("wio.db");
const databases = new JsonDatabase({
databasePath:"./databases/karaliste.json"
});
const botkullanim = new JsonDatabase({
  databasePath:"./databases/botkullanim.json"
});
let talkedRecently = new Set();
module.exports = async message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, );

  let client = message.client;
  if (!message.guild) return
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);

  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if(message.author.id !== '840695080075526164') {
      if(databases.fetch(message.guild.owner.user.id) && !databases.fetch(message.author.id)) return message.reply('Bu sunucunun sahibi botun karalistesinde. O yüzden sende komut kullanamazsın.'); 
      if(databases.fetch(message.author.id)) return message.reply('Sen botun karalistesindesin. Komutları kullanamazsın.');
      };
  cmd.run(client, message, params, perms);
     botkullanim.add("botkullanim", 1)
     const embed = new Discord.MessageEmbed()
    .setTitle(`Bir Komut kullanıldı.`)
    .setDescription(`
    > Komutu kullanan kişi: **${message.author.tag}**
    > Kullanılan Komut: **${message.content}** 
    > Kullanılan Sunucu: **${message.guild.name}**`)
    .setColor("YELLOW")
    client.channels.cache.get(logschannel.botcmdrun).send(embed)
  }
};


