const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const ms = require("ms");
const config = require('../../botconfig/roles.json')
const chconfig = require('../../botconfig/channel.json')
module.exports = {
    name: "unmute",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Unmutes an Muted user",
    usage: "unmute <user>",
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
        let target = message.guild.members.cache.get(member.id)
        const role = message.guild.roles.cache.find(role => role.name === (config.muted))
        const LogChannel = client.channels.cache.get(chconfig.logchannel);

        target.roles.remove(role);
        message.reply('Removed Role!')
    }
}