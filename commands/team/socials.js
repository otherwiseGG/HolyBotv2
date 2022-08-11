const {
    MessageActionRow,
    MessageButton,
    MessageEmbed
} = require('discord.js');
const Discord = require("discord.js");
const config = require('../../botconfig/roles.json')
module.exports = {
    name: "socials",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Sends Socials",
    usage: "language",
    toggleOff: false,
    developersOnly: true,
    userpermissions: ["MANAGE_ROLES"],
    botpermissions: ["ADMINISTRATOR"],


    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor('GOLD')
            .setThumbnail('https://cdn.discordapp.com/attachments/900752414611734558/915901093978972200/a_001d9410ba3f190dec3c87fe09c7fce0.gif')
            .setDescription(`🚀**HOLY ENERGY SOCIAL MEDIA & CONTACT**🚀\n\n 🇩🇪 - Für **Deutschland** // For **Germany**:\n**E-Mail**: hello@holyenergy.de\n**Instagram**: holy.energy\n **WhatsApp**: +49 1515 0749081\n **Facebook Group**: https://www.facebook.com/groups/holyenergysquad/ \n\n 🇪🇺 - Für **Europa** // For **Europe**:\n**E-Mail**: hello@holyenergy.eu\n**Instagram**: holyenergy.eu\n\n 🇫🇷 - Für **Frankreich** // For **France**:\n**E-Mail**: bonjour@holyenergy.fr\n**Instagram**: holyenergy.fr\n\n`)
            .setImage('https://cdn.discordapp.com/attachments/833850555339374604/904680047787540510/3.png')
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('HOLYENERGY INSTAGRAM')
                    .setURL('https://www.instagram.com/holy.energy/')
                    .setStyle('LINK')
                    .setEmoji('🇩🇪'),
                new MessageButton()
                    .setLabel('HOLYENERGY INSTAGRAM')
                    .setURL('https://www.instagram.com/holyenergy.eu/')
                    .setStyle('LINK')
                    .setEmoji('🇪🇺'),
                new MessageButton()
                    .setLabel('HOLYENERGY INSTAGRAM')
                    .setURL('https://www.instagram.com/holyenergy.fr/')
                    .setStyle('LINK')
                    .setEmoji('🇫🇷'),
                new MessageButton()
                    .setLabel('HOLYENERGY MEME INSTAGRAM')
                    .setURL('https://www.instagram.com/holyenergy.memes/')
                    .setStyle('LINK')
                    .setEmoji('🤣'),
                new MessageButton()
                    .setLabel('HOLYENERGY WHATSAPP')
                    .setURL('https://api.whatsapp.com/send/?phone=4915150749081&text=Hi%20HOLY%20Team%20%F0%9F%9A%80%20Ich%20habe%20eine%20Frage:%20%0A%0A')
                    .setStyle('LINK')
                    .setEmoji('🇩🇪'),
            );

        message.channel.send({
            embeds: [embed],
            components: [row]
        })
    }
};
