const Discord = require('discord.js');
const db = require('quick.db');
////////configs
const ayarlar = require('../../config/config.json');
const mesajtr = require('../../config/mesajlartr.json');
const mesajen = require('../../config/mesajlaren.json');
const emotes = require('../../config/emotes.json')
const logsch = require("../../config/logschannel.json")
////////configs
const emoji = {
   'brigade': emotes.discordyetkilisi,
   'partner': emotes.discordpartner,
   'events': emotes.discordevents,
   'brillance': emotes.discordbrillance,
   'bravery': emotes.discordbravery,
   'balance': emotes.discordbalance,
   'hunter_gold': emotes.discordhunter_gold,
   'hunter': emotes.discordhunter,
   'support': emotes.discordearlysupport,
   'developers': emotes.discorddevelopers,
   'nitro': emotes.discordnitro,
   'boost': emotes.discordboost,
   'bot': emotes.discordbot,
   'onaylıbot': emotes.discordonaylibot
};

   exports.run =  async (client ,message, args) => {
    let brigade = [];
    let partner = [];
    let events = [];
    let brillance = [];
    let bravery = [];
    let balance = [];
    let hunter_gold = [];
    let hunter = [];
    let support = [];
    let developers = [];
    let nitro = [];
    let onaylı =[];
    message.guild.members.cache.forEach(async(m) => {
        const flags = m.user.flags || await m.user.fetchFlags();
        if(flags.toArray().includes('DISCORD_EMPLOYEE')) brigade.push(m.id);
        if(flags.toArray().includes('DISCORD_PARTNER')) partner.push(m.id);
        if(flags.toArray().includes('HYPESQUAD_EVENTS')) events.push(m.id);
        if(flags.toArray().includes('HOUSE_BRILLIANCE')) brillance.push(m.id);
        if(flags.toArray().includes('HOUSE_BRAVERY')) bravery.push(m.id);
        if(flags.toArray().includes('VERIFIED_BOT')) onaylı.push(m.id);
        if(flags.toArray().includes('HOUSE_BALANCE')) balance.push(m.id);
        if(flags.toArray().includes('BUGHUNTER_LEVEL_2')) hunter_gold.push(m.id);
        if(flags.toArray().includes('BUGHUNTER_LEVEL_1')) hunter.push(m.id);
        if(flags.toArray().includes('EARLY_SUPPORTER')) support.push(m.id);
        if(flags.toArray().includes('VERIFIED_DEVELOPER')) developers.push(m.id);
    });

    let description = `
     > ${emoji.brigade} Discord Employee **${brigade.length}**
   > ${emoji.partner} Discord Partner **${partner.length}**
   > ${emoji.events} Hypesquad Events **${events.length}**
   > ${emoji.brillance} Brillance **${brillance.length}**
   > ${emoji.bravery} Bravery **${bravery.length}**
   > ${emoji.balance} Balance **${balance.length}**
   > ${emoji.hunter_gold} BugHunter Gold **${hunter_gold.length}**
   > ${emoji.hunter} BugHunter **${hunter.length}**
   > ${emoji.support} Early Supporter **${support.length}**
   > ${emoji.developers} Verified Developer **${developers.length}**
   > ${emoji.nitro} Nitro **${nitro.length}** (not exact)
   > ${emoji.boost} Server Booster **${message.guild.members.cache.filter(m => m.premiumSinceTimestamp).size}** (not exact)
   > ${emoji.bot} Bot **${message.guild.members.cache.filter(m => m.user.bot).size}**
   > ${emoji.onaylıbot} Verified Bot **${onaylı.length}**`;

    const embed = new Discord.MessageEmbed()
    .setColor('#E70000')
    .setDescription(description);
    message.inlineReply(embed);
    
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rozetler","badges"], 
    permLevel: 0,
};
exports.help = {
    name: 'rozet-say',
    usage: 'kullanımı',
    description: 'açıklama',
};