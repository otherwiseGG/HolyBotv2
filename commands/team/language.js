const Discord = require('discord.js')
const simplydjs = require("simply-djs")
const config = require('../../botconfig/roles.json')
module.exports = {
    name: "language",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Sends Language RR",
    usage: "language",
    toggleOff: false,
    developersOnly: true,
    userpermissions: ["MANAGE_ROLES"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setTitle("Select your Region!")
            .setDescription("To gain full Access to the Server, please select your Region below!")
            .setImage('https://cdn.discordapp.com/attachments/909161359676145694/969243585176305734/ezgif.com-gif-maker.gif')
            .setFooter("© HOLY Energy - otherwise#5109")
        simplydjs.btnrole(client, message, {
            embed: embed,
            data: [{
                role: (config.german),
                label: 'DACH', // default: *role name*
                color: 'PRIMARY', // default: SECONDARY
                emoji: '🇩🇪',
            },
                {
                    role: (config.europe),
                    label: 'Europe', // default: *role name*
                    color: 'PRIMARY', // default: SECONDARY
                    emoji: '🇪🇺',
                },
                {
                    role: (config.french),
                    label: 'France', // default: *role name*
                    color: 'PRIMARY', // default: SECONDARY
                    emoji: '🇫🇷',
                },
                {
                    role: (config.nordic),
                    label: 'Scandinavia', // default: *role name*
                    color: 'PRIMARY', // default: SECONDARY
                    emoji: '🇩🇰',
                },
            ],
        })
    }
}
