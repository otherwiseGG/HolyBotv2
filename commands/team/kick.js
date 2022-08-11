const {
    Discord,
    MessageEmbed
} = require("discord.js");
const chconfig = require('../../botconfig/channel.json')
module.exports = {
    name: "kick",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Kicks an User",
    usage: "kick <user>",
    toggleOff: false,
    developersOnly: false,
    requiredroles: ["900458627398242325"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        const LogChannel = client.channels.cache.get(chconfig.logchannel);
        const user = message.mentions.members.first();
        const reason = args.slice(1).join(' ');
        const noreasonkick = new MessageEmbed()
            .setAuthor(`❌ •  Failed!`, message.author.avatarURL())
            .setColor('#ff0000')
            .setDescription(`Unable to kick someone without a Reason!`)
            .setTimestamp()
        if (!reason) return message.delete().then(message.channel.send({
            embeds: [noreasonkick]
        }))

        if (user) {
            user.kick().then(() => {
                const kicked = new MessageEmbed()
                    .setAuthor(`✅ •  Success!`, message.author.avatarURL())
                    .setColor('#00ff11')
                    .setDescription(`${user} has been kicked!`)
                    .addFields({
                        name: 'Kicked by',
                        value: `${message.author.username}`
                    }, {
                        name: 'Reason',
                        value: `${reason}`,
                        inline: true
                    },)
                    .setTimestamp()
                message.delete().then(message.channel.send({
                    embeds: [kicked]
                })).then(LogChannel.send({
                    embeds: [kicked]
                }))
            })
        } else {
            const kicknotfound = new MessageEmbed()
                .setAuthor(`❌ •  Failed!`, message.author.avatarURL())
                .setColor('#ff0000')
                .setDescription(`I'm unable to find the User you provided!`)
                .setTimestamp()
            message.delete().then(message.channel.send({
                embeds: [kicknotfound]
            }))
        }

    }
}
