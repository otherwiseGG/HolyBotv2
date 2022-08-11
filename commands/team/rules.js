const Discord = require('discord.js')
const simplydjs = require("simply-djs")
const config = require('../../botconfig/roles.json')
const eeconfig = require('../../botconfig/emojis.json')
module.exports = {
    name: "rules",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Sends Rule RR",
    usage: "rules",
    toggleOff: false,
    developersOnly: true,
    userpermissions: ["MANAGE_ROLES"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setTitle("Read the Rules?")
            .setImage('https://cdn.discordapp.com/attachments/833850555339374604/904680043928760331/2.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/900752414611734558/915901093978972200/a_001d9410ba3f190dec3c87fe09c7fce0.gif')
            .setDescription(`🇩🇪 WILLKOMMEN IM HOLY DISCORD\n\n⚠️Um vollen Zugriff auf den HOLY Energy Server zu bekommen drücke bitte den Button unterhalb dieser Nachricht.\n\nDer HOLY Discord bringt den HOLY Squad zusammen! Egal ob ihr Team Raptor, Team Cobra oder Team Tiger seid, hier könnt ihr euch austauschen, weitere HOLY Jünger kennenlernen und zusammen Spass haben! Wir haben kein Bock auf ein ewig langes Regelwerk, deshalb nur kurz:\n\n• Be positive, be friendly and have fun!\n• Keine Diskriminierung, kein Mobbing, kein Rassismus, keine Homophobie, kein Hass\n• Kein NSFW Content, kein Spam\n• Keine Werbung (ihr dürft euren eigenen Stream/Clan im Selfpromotion Kanal promoten)\n• Wahre deine Privaten Daten sowie die Daten anderer. Poste keine Adressen, Namen oder ähnliches.\n • Mit dem Beitritt zum HOLY Discord Server erklärst du dich damit einverstanden, die Discord Nutzungsbedingungen & Richtlinien zu beachten.\n\n\n\n\n 🇬🇧 WELCOME TO THE HOLY DISCORD\n⚠️To get full access to the HOLY Energy server please press the button below this message.\nThe HOLY Discord brings the HOLY Squad together! No matter if you are Team Raptor, Team Cobra or Team Tiger, here you can exchange ideas, get to know other HOLY disciples and have fun together! We don't want to have a long set of rules, so just a short one:\n• Be positive, be friendly and have fun!\n• No discrimination, no bullying, no racism, no homophobia, no hate\n• No NSFW content, no spam\n• No advertising (you are allowed to promote your own stream/clan in the Selfpromotion channel)\n• Protect your private data and the data of others. Do not post addresses, names or similar.\n• By joining the HOLY Discord server, you agree to abide by the Discord Terms of Use & Policies.\n\n  `)
            .setFooter("© HOLY Energy - otherwise#5109")
        simplydjs.btnrole(client, message, {
            embed: embed,
            data: [{
                role: (config.rules),
                label: 'Accept the Rules', // default: *role name*
                color: 'SUCCESS', // default: SECONDARY
                emoji: '✅',
            },],
        })
    }
}