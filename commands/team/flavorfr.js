const Discord = require('discord.js')
const simplydjs = require("simply-djs")
const config = require('../../botconfig/roles.json')
module.exports = {
    name: "flavorfr",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Sends the French Flavor RR",
    usage: "flavorfr",
    toggleOff: false,
    developersOnly: true,
    userpermissions: ["MANAGE_ROLES"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setTitle("Sélectionne ton animal!")
            .setDescription("Quelle est ta saveur préférée?\n Quelle saveur te fait rêver la nuit? \n Sélectionne ton animal et montre ton soutien!")
            .setFooter("© HOLY Energy - otherwise#5109")
            .setImage('https://holyenergy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa1a37ea4-1fbe-4087-a5bb-958d18e9da9a%2FHOLY_Citrus_Cobra_IG_Feed.png?table=block&id=b2b52d50-8ae0-48db-aaa2-de8c257377b7&spaceId=b84487cb-f328-40a7-a864-406d08d99577&width=2000&userId=&cache=v2')
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
                {
                    role: (config.lion), //Lizard
                    label: 'Lions Lemonade Squad', // default: *role name*
                    color: 'PRIMARY', // default: SECONDARY
                    emoji: '🐯',
                },
                {
                    role: (config.panther), //Lizard
                    label: 'Peach Panther Squad', // default: *role name*
                    color: 'PRIMARY', // default: SECONDARY
                    emoji: '🐆',
                },
                                {
                    role: (config.bear),
                    label: 'Blueberry Bear Squad',
                    color: 'PRIMARY',
                    emoji: '🐻',
                }
            ],
        })
    }
}
