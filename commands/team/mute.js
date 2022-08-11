const {
    Client,
    Message,
    MessageEmbed,
    Discord
} = require('discord.js');
const ms = require('ms')
const config = require('../../botconfig/roles.json')
const chconfig = require('../../botconfig/channel.json')

module.exports = {
    name: "mute",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Mutes an User",
    usage: "mute <user> <time> <reason>",
    toggleOff: false,
    developersOnly: false,
    requiredroles: ["900458627398242325"],
    botpermissions: ["ADMINISTRATOR"],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, Discord) => {

        const member = message.mentions.members.first();
        let time = args[1];
        const reason = args.slice(2).join(' ');
        const role = message.guild.roles.cache.find(role => role.name === (config.muted))
        const LogChannel = client.channels.cache.get(chconfig.logchannel);
        //.then(LogChannel.send({ embeds: [purged] }))

        if (!member) return message.reply('Mention a user!');
        if (!time) return message.reply('Tell the time!');
        if (!reason) return message.reply('Tell me a reason');

        if (member.id === message.author.id) return message.reply('You cant mute your self!')
        if (member.id === client.id) return message.reply('You cant mute me!')

        let role2 = message.guild.roles.cache.find(role => role.name === (config.muted))
        if (member.roles.cache.has(role2)) return message.reply('User is already muted! ')

        if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply('You cant mute this user')


        await member.roles.add(role2)
        message.channel.send(`${member.user.username} has been muted for ${ms(ms(time))}, Reason: ${reason}`)

        setTimeout(() => {
            member.roles.remove(role2)
        }, ms(time))
    }
}