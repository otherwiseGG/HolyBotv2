const Discord = require('discord.js')
const simplydjs = require("simply-djs")
const config = require('../../botconfig/roles.json')
module.exports = {
    name: "flavoren",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Sends the English Flavor RR",
    usage: "flavoren",
    toggleOff: false,
    developersOnly: true,
    userpermissions: ["MANAGE_ROLES"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setTitle("Choose your SQUAD!")
            .setDescription("Which flavor is stuck in your Head?\n Which flavor do you dream about at night?\nChoose your SQUAD now and show your support!")
            .setFooter("© HOLY Energy - otherwise#5109")
            .setImage('https://holyenergy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F046eeecb-79c2-486b-b877-851d54ac73bd%2FHOLY_Strawberry_Shark_IG_Feed.png?table=block&id=9c6dd05c-f9cd-4bee-a52e-f6a1694dd5f3&spaceId=b84487cb-f328-40a7-a864-406d08d99577&width=2000&userId=&cache=v2')
        simplydjs.btnrole(client, message, {
            embed: embed,
            data: [{
                role: (config.raptor), //Raptor
                label: 'Raspberry Raptor Squad', // default: *role name*
                color: 'PRIMARY', // default: SECONDARY
                emoji: '🦅',
            },
                {
                    role: (config.shark), //Shark
                    label: 'Strawberry Shark Squad', // default: *role name*
                    color: 'PRIMARY', // default: SECONDARY
                    emoji: '🦈',
                },
                {
                    role: (config.cobra), //Cobra
                    label: 'Citrus Cobra Squad', // default: *role name*
                    color: 'PRIMARY', // default: SECONDARY
                    emoji: '🐍',
                },
                {
                    role: (config.tiger), //Tiger
                    label: 'Tropical Tiger Squad', // default: *role name*
                    color: 'PRIMARY', // default: SECONDARY
                    emoji: '🐯',
                },
                {
                    role: (config.lizard), //Lizard
                    label: 'Lemon Lizard Squad', // default: *role name*
                    color: 'PRIMARY', // default: SECONDARY
                    emoji: '🦎',
                },
                {
                    role: (config.deer), //Lizard
                    label: 'XMAS Deer Squad', // default: *role name*
                    color: 'PRIMARY', // default: SECONDARY
                    emoji: '🦌',
                },
            ],
        })
    }
}