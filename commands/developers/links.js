const {
    MessageEmbed
} = require("discord.js");
const glob = require("glob");
const chalk = require("chalk");
const {
    clientname,
    clientavatar
} = require("../../botconfig/main.json");
module.exports = {
    name: "links",
    cooldowns: 3000,
    description: "sends links",
    usage: "links",
    toggleOff: false,
    developersOnly: true,
    userpermissions: ["MANAGE_SERVER"],
    botpermissions: ["ADMINISTRATOR"],
    run: async (client, message, args) => {
        const links = new MessageEmbed()
            .setColor("GOLD")
            .setTitle("HOLY DEV Links")
            .setDescription("All Links for the HOLYDEV's")
            .addFields({
                name: 'Repository',
                value: `[HOLYMOLY MASTER](https://gitlab.holydev.net/dringewald/holymoly-docker/-/tree/master)`
            }, {
                name: 'Test-Website',
                value: `[HOLYMOLY TESTSITE](https://test.holymoly.pro/)`
            }, {
                name: 'Backend Website',
                value: `[HOLYMOLY BACKEND](https://test.holymoly.pro/api)`
            }, {
                name: 'PHPMYADMIN',
                value: `[PHPMYADMIN](https://phpmyadmin.holydev.net/)`
            }, {
                name: 'PGADMIN',
                value: `[PGADMIN](https://pgadmin.holydev.net/)`
            }, {
                name: 'Wiki',
                value: `[WIKI](https://wiki.holydev.net/)`
            }, {
                name: 'GitLab',
                value: `[GITLAB](https://gitlab.holydev.net/)`
            }, {
                name: 'Nexus',
                value: `[Nexus](https://nexus.holydev.net/)`
            },)
            .setTimestamp()
        message.channel.send({
            embeds: [links]
        })
    },
};