const Discord = require('discord.js')
module.exports = {
    name: "howto",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Sends howto",
    usage: "howto",
    toggleOff: false,
    developersOnly: true,
    userpermissions: ["MANAGE_ROLES"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
            .setTitle("How to verify?")
            .setDescription("To gain full Access to the Server, please accept the Rules in <#796413910538125332>, then you get access to the <#837089307957002291> Channel.\n Select your Region and you've successfully verified yourself and have full access to the Server now.")
            .setImage('https://cdn.discordapp.com/attachments/909161359676145694/969246737850064906/ezgif.com-gif-maker_1.gif')
            .setFooter("© HOLY Energy - otherwise#5109")
            
            message.channel.send({
            embeds: [embed]
        })

    }
}
