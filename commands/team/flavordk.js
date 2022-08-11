const Discord = require('discord.js')
const simplydjs = require("simply-djs")
const config = require('../../botconfig/roles.json')
module.exports = {
    name: "flavordk",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Sends the Danish Flavor RR",
    usage: "flavordk",
    toggleOff: false,
    developersOnly: true,
    userpermissions: ["MANAGE_ROLES"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setTitle("Vælg din SQUAD!")
            .setDescription("Hvilken smag sidder fast i dit hoved?\n Hvilken smag drømmer du om, om natten?\nVælg DIT squad nu og vis din støtte! ")
            .setFooter("© HOLY Energy - otherwise#5109")
            .setImage('https://holyenergy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3d9a589d-80af-4b02-b827-367182115276%2FFrontalansicht_Clouds_Background.png?table=block&id=efb28bb1-31e7-4a76-b940-0f13e18a3516&spaceId=b84487cb-f328-40a7-a864-406d08d99577&width=2000&userId=&cache=v2')
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
