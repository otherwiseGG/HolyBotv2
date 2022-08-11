// noinspection JSVoidFunctionReturnValueUsed

const { Discord, MessageEmbed } = require("discord.js");
const chconfig = require('../../botconfig/channel.json')
module.exports = {
    name: "ban",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Bans an User",
    usage: "ban <user> <reason>",
    toggleOff: false,
    developersOnly: false,
    requiredroles: ["900458627398242325"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        const user = message.mentions.members.first();
        const reason = args.slice(1).join(' ');
        client.channels.cache.get(chconfig.logchannel);
        const noreason = new MessageEmbed()
            .setAuthor(`❌ •  Failed!`, message.author.avatarURL())
            .setColor('#ff0000')
            .setDescription(`Unable to ban someone without a Reason!`)
            .setTimestamp()
        if (!reason) return message.delete().then(message.channel.send({
            embeds: [noreason]
        }))

        if (user) {
            await user.ban({
                reason: reason,
            }).then(() => {
                const banned = new MessageEmbed()
                    .setAuthor(`✅ •  Success!`, message.author.avatarURL())
                    .setColor('#00ff11')
                    .setDescription(`${user} has been banned!`)
                    .addFields({
                        name: 'Banned by',
                        value: `${message.author.username}`
                    }, {
                        name: 'Reason',
                        value: `${reason}`,
                        inline: true
                    },)
                    .setTimestamp()
                message.delete().then(message.channel.send({
                    embeds: [banned]
                }))
            })
        } else {
            const usernotfound = new MessageEmbed()
                .setAuthor(`❌ •  Failed!`, message.author.avatarURL())
                .setColor('#ff0000')
                .setDescription(`I'm unable to find the User you provided!`)
                .setTimestamp()
            message.delete().then(message.channel.send({
                embeds: [usernotfound]
            }))
        }
    }
};
