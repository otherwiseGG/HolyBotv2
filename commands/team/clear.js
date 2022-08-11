const {
    Discord,
    MessageEmbed
} = require("discord.js");
const chconfig = require('../../botconfig/channel.json')
module.exports = {
    name: "clear",
    aliases: ["purge", "delete", ""],
    cooldowns: 0,
    description: "Clears X Amount of Messages",
    usage: "clear <amount>",
    toggleOff: false,
    developersOnly: false,
    requiredroles: ["900458627398242325"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        try {
            let delamount = args[0];
            const LogChannel = client.channels.cache.get(chconfig.logchannel);
            const noamount = new MessageEmbed()
                .setAuthor(`❌ •  Failed!`, message.author.avatarURL())
                .setColor('#ff0000')
                .setDescription(`Please define the amount of messages.`)
                .setTimestamp()
            if (isNaN(delamount) || parseInt(delamount <= 0)) return message.delete().then(message.channel.send({
                embeds: [noamount]
            }))

            const more100 = new MessageEmbed()
                .setAuthor(`❌ •  Failed!`, message.author.avatarURL())
                .setColor('#ff0000')
                .setDescription(`You cannot delete more than 100 Messages at once!`)
                .setTimestamp()
            if (parseInt(delamount) > 100) return message.delete().then(message.channel.send({
                embeds: [more100]
            }))

            await message.channel.bulkDelete(parseInt(delamount) + 1, true);

            const purged = new MessageEmbed()
                .setAuthor(`✅ •  Success!`, message.author.avatarURL())
                .setColor('#00ff11')
                .setDescription(`Messages deleted!`)
                .addFields({
                    name: 'Deleted by',
                    value: `${message.author.username}`
                }, {
                    name: 'Amount of Messages',
                    value: `${delamount}`,
                    inline: true
                },)
                .setTimestamp()
            await message.delete().then(message.channel.send({
                embeds: [purged]
            })).then(LogChannel.send({
                embeds: [purged]
            }))
        } catch (e) {
            console.log(e)
        }
    },
};
