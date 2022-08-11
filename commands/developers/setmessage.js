const Discord = require("discord.js");
const db = require("old-wio.db");

module.exports = {
    name: "setmessage",
    aliases: ["setmsg", "sm"],
    cooldowns: 0,
    description: "Sets the Welcome Message",
    usage: "setmessage",
    toggleOff: false,
    developersOnly: true,
    userpermissions: ["MANAGE_SERVER"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args, Color) => {

        const Welcome = ["welcome", "wel", "join"],
            Goodbye = ["goodbye", "leave", "left"];

        if (
            !args[0] ||
            ![...Welcome, ...Goodbye].find((T) => T === args[0].toLowerCase())
        )
            return message.channel.send(
                `Please Give A Valid Type - ${[...Welcome, ...Goodbye].join(", ")}`
            );

        const messageRaw = args.slice(1).join(" ");

        if (!messageRaw)
            return message.channel.send(
                `Please Give Message\n\nCustom:\n<servername> => Server Name\n<membermame> => Member Name\n<membermention> => Member Mention`
            );

        if (messageRaw.length > 1000)
            return message.channel.send("Too Long Message - Limit 1000");

        const Current = Welcome.some((wel) => wel === args[0]) ?
            "Welcome" :
            "Goodbye";

        await db.set(
            `${Current === "Welcome" ? "WM" : "GM"}-${message.guild.id}`,
            messageRaw
        );

        return message.channel.send({
            embeds: [{
                color: Color || "RANDOM",
                title: "Success",
                description: `${Current} Message Has Been Set -\n${messageRaw}`,
                footer: {
                    text: `- ${message.author.username}`
                },
                timestamp: new Date(),
            },],
        });
    },
};
