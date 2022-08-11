const Discord = require('discord.js')
const simplydjs = require("simply-djs")
module.exports = {
    name: "ticket",
    aliases: ["", "", ""],
    category: "TICKETS",
    cooldowns: 0,
    description: "Ticket Panel",
    usage: "ticket",
    toggleOff: false,
    developersOnly: false,
    userpermissions: ["MANAGE_MESSAGES"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {

        simplydjs.ticketSystem(message, message.channel, {
            embedDesc: 'Need Support? Click the Button and open a Ticket!', // default: '🎫 Create a ticket by clicking the button 🎫'
            embedColor: '#075FFFF', // default: #075FFFF
            embedFoot: '© HOLY Energy - otherwise#5109', // default: message.guild.name
            emoji: '', // default:, 🎫
            color: '', // default: blurple
            credit: false,
        })
    }
}