const Discord = require("discord.js");
const db = require("old-wio.db");

module.exports = {
    name: "setchannel",
    aliases: ["setch", "sc"],
    cooldowns: 0,
    description: "Sets the Welcome Channel",
    usage: "setchannel",
    toggleOff: false,
    developersOnly: true,
    userpermissions: ["MANAGE_SERVER"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args, Color) => {

        const mentionedChannel =
            message.mentions.channels.first() ||
            message.guild.channels.cache.get(args[0]);

        if (!mentionedChannel || mentionedChannel.type === "voice")
            return message.channel.send(`Please Give A Valid Text Channel!`);

        const Welcome = ["welcome", "wel", "join"],
            Goodbye = ["goodbye", "leave", "left"];

        if (
            !args[1] ||
            ![...Welcome, ...Goodbye].find((T) => T === args[1].toLowerCase())
        )
            return message.channel.send(
                `Please Give A Valid Type - ${[...Welcome, Goodbye].join(", ")}`
            );

        const Current = Welcome.some((wel) => wel === args[1].toLowerCase()) ?
            "Welcome" :
            "Goodbye";

        await db.set(
            `${Current === "Welcome" ? `WC` : `GC`}-${message.guild.id}`,
            mentionedChannel.id
        );

        return message.channel.send({
            embeds: [{
                color: Color || "RANDOM",
                title: "Success",
                description: `${Current} Channel Has Been Set - <#${mentionedChannel.id}>`,
                footer: {
                    text: `- ${message.author.username}`
                },
                timestamp: new Date(),
            },],
        });
    },
};
