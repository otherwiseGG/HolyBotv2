const Discord = require('discord.js')
const simplydjs = require("simply-djs")
const config = require('../../botconfig/roles.json')
module.exports = {
    name: "pingroles",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Sends the ping roles RR",
    usage: "pingroles",
    toggleOff: false,
    developersOnly: true,
    userpermissions: ["MANAGE_ROLES"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setTitle("Choose your Ping Roles!")
            .setDescription("To prevent tagging everyone, we're introducing Ping Roles!\n\nSelect 🧑‍💻 for the Technical Pings!\nSelect 📱 for the Social-Media Pings!\nSelect 📣 for the HOLY News Pings!")
            .setFooter("© HOLY Energy - otherwise#5109")
        simplydjs.btnrole(client, message, {
            embed: embed,
            data: [{
                role: (config.techping), //Raptor
                label: 'Technical Ping', // default: *role name*
                color: 'PRIMARY', // default: SECONDARY
                emoji: '🧑‍💻',
            },
                {
                    role: (config.socialping),
                    label: 'Social-Media Ping',
                    color: 'PRIMARY',
                    emoji: '📱'
                },
                {
                    role: (config.newsping),
                    label: 'HOLY News Ping',
                    color: 'PRIMARY',
                    emoji: '📣'
                }],
        })
    }
}
