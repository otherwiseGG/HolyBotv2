const { MessageEmbed } = require('discord.js');
const client = require("../index");
const canvas = require("discord-canvas"),
    db = require("old-wio.db");
//

const {
    Support,
    Color,
    Welcome_Images,
    GoodBye_Images,
} = require("../config.js");
const guildID = require("../botconfig/main.json");

client.on("guildMemberAdd", async (member) => {
    if (member.guild.id === `${guildID.guildId}`) {
        var role1 = member.guild.roles.cache.find(role => role.id === "898474417716338688"); //Special
        var role2 = member.guild.roles.cache.find(role => role.id === "898474765528989728"); //Flavors
        var role3 = member.guild.roles.cache.find(role => role.id === "898474852187516958"); //Languages
        var role4 = member.guild.roles.cache.find(role => role.id === "898474935918424096"); //Misc
        member.roles.add(role1);
        member.roles.add(role2);
        member.roles.add(role3);
        member.roles.add(role4);
    }
    const channel = client.channels.cache.get('837115294895177778')
    const welcome = new MessageEmbed()
        .setColor('GREEN')
        .setThumbnail(member.user.avatarURL({dynamic: true}))
        .setTitle(`<:holy:809719393541554188> Welcome ${member.user.username}! <:holy:809719393541554188>`)
        .setDescription(`Welcome <@${member.user.id}> on HOLY Energy!
        \n\nPlease do the following now:\n➡️ Go to <#796413910538125332> to read and accept the Rules\n➡️ After you accepted the Rules, head to <#837089307957002291> and select your Language\n➡️ You now gained Access to the Server. Welcome! 🔥`)
        .setTimestamp()
    channel.send({embeds: welcome}).then(embedMessage => {
    });
})