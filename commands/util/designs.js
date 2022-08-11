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
    name: "designs",
    aliases: ["design"],
    cooldowns: 3000,
    description: "Sends the Design Link!",
    usage: "designs",
    toggleOff: false,
    developersOnly: false,
    userpermissions: [""],
    botpermissions: ["ADMINISTRATOR"],
    run: async (client, message, args) => {
        const links = new MessageEmbed()
            .setColor("GOLD")
            .setTitle("HOLYENERGY DESIGN SEITE")
            .setDescription("Here you can find the HOLYENERGY Designs Site!")
            .addFields({
                name: 'DESIGNS DE',
                value: `[SQUAD DESIGNS](https://holyenergy.notion.site/56025b1441334f83ae8d7bb7c1bfbef6?v=0b71dced6eb34a248cca6625e52662d0)`
            }, {
                name: 'DESIGNS EU',
                value: `[SQUAD DESIGNS](https://holyenergy.notion.site/56025b1441334f83ae8d7bb7c1bfbef6?v=0b71dced6eb34a248cca6625e52662d0)`
            }, {
                name: 'DESIGNS FR',
                value: `[SQUAD DESIGNS](https://holyenergy.notion.site/56025b1441334f83ae8d7bb7c1bfbef6?v=0b71dced6eb34a248cca6625e52662d0)`
            },)
            .setTimestamp()
            .setImage('https://holyenergy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F630abffe-e3b9-43f7-b062-0e127e2ce3e1%2FHOLY_Insta_Nov21_5.png?table=block&id=f1dbfcd7-a444-4202-9579-6a36f44eef29&spaceId=b84487cb-f328-40a7-a864-406d08d99577&width=2000&userId=&cache=v2')
        message.channel.send({
            embeds: [links]
        })
    },
};