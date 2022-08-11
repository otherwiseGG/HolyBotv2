const Discord = require('discord.js')
const simplydjs = require("simply-djs")
const config = require('../../botconfig/roles.json')
module.exports = {
    name: "flavorde",
    aliases: ["flde", "", ""],
    cooldowns: 0,
    description: "Sends the German Flavor RR",
    usage: "flavorde",
    toggleOff: false,
    developersOnly: true,
    userpermissions: ["MANAGE_ROLES"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setTitle("Wähle deinen SQUAD!")
            .setDescription("Welcher Geschmack geht dir nicht mehr aus dem Kopf?\n Über welchen Geschmack träumst du Nachts?\nWähle jetzt deinen SQUAD aus und zeige deinen Support!")
            .setFooter("© HOLY Energy - otherwise#5109")
            .setImage('https://holyenergy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fca581b96-26fd-41ef-a6b2-0b60d456d5fe%2FHOLY_Insta_Nov21_6.png?table=block&id=43bf2a9a-baf2-4411-9a84-c6ea674a96ed&spaceId=b84487cb-f328-40a7-a864-406d08d99577&width=2000&userId=&cache=v2')
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
