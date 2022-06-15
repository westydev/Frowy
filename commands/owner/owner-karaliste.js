const Discord = require('discord.js');
const { JsonDatabase } = require("wio.db");
const database = new JsonDatabase({
databasePath:"./databases/karaliste.json"
});
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
exports.run = async (client, message, chimp) => {

if(message.author.id !== '840695080075526164') return;

if(!chimp[0]) return message.reply("Bir kullanıcı id'si girmelisin.");

const user = await client.users.fetch(chimp[0]).catch(err => {
return message.reply('Bu idye sahip bir kullanıcı bulamadım.')});

if(user) {

  if(database.fetch(user.id)) {
  database.delete(user.id);
  return message.inlineReply(`\`${user.tag}\` isimli kullanıcı zaten karalistedeydi, karalisteden çıkarıldı.\nArtık botun komutlarını kullanabilecek.`);
  }
  database.set(user.id, true);
  message.inlineReply(`\`${user.tag}\` isimli kullanıcı başarıyla karalisteye alındı.\n\`${user.username}\`'nin taç sahibi olduğu tüm sunucularda benim komutlarımı kimse kullanamayacak.\nTaç sahibi değil ise, \`${user.username}\` yine komutları kullanamayacak.`);
};
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'karaliste'
};