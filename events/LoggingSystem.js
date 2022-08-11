const client = require('../index');
const chconfig = require('../botconfig/channel.json')
const {
    MessageEmbed
} = require('discord.js');

// Member Started Boosting
client.on("guildMemberBoost", (member) => {

    const LogChannel = client.channels.cache.get(chconfig.logchannel); // Replace with your channel id
    const MemberBoost = new MessageEmbed()
        .setTitle('Started Boosting!')
        .setColor('PINK')
        .setThumbnail(`${member.user.displayAvatarURL({dynamic: true})}`)
        .addField('Username', `<@${member.user.id}>`)
        .addField('Server', `${member.guild.name}`)
        .setTimestamp()
    return LogChannel.send({
        embeds: [MemberBoost]
    });

})

// Member Unboosted
client.on("guildMemberUnboost", (member) => {

    const LogChannel = client.channels.cache.get(chconfig.logchannel); // Replace with your channel id
    const MemberUnboost = new MessageEmbed()
        .setTitle('Stopped Boosting')
        .setColor('PINK')
        .setThumbnail(`${member.user.displayAvatarURL({dynamic: true})}`)
        .addField('Username', `<@${member.user.id}>`)
        .addField('Server', `${member.guild.name}`)
        .setTimestamp()
    return LogChannel.send({
        embeds: [MemberUnboost]
    });

})

// Server Boost Level Up
client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {

    const LogChannel = client.channels.cache.get(chconfig.logchannel); // Replace with your channel id
    const LevelUp = new MessageEmbed()
        .setTitle('Server Boost Level Up')
        .setColor('#2F3136')
        .setDescription(`${guild.name} reached the boost level ${newLevel}`);

    return LogChannel.send({
        embeds: [LevelUp]
    });

})

// Server Boost Level Down
client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {

    const LogChannel = client.channels.cache.get(chconfig.logchannel); // Replace with your channel id
    const LevelDown = new MessageEmbed()
        .setTitle('Server Boost Level Down')
        .setColor('#2F3136')
        .setDescription(`${guild.name} lost a level from ${oldLevel} to ${newLevel}`);

    return LogChannel.send({
        embeds: [LevelDown]
    });

})

// Banner Added
client.on("guildBannerAdd", (guild, bannerURL) => {

    const LogChannel = client.channels.cache.get(chconfig.logchannel); // Replace with your channel id
    const BannerAdd = new MessageEmbed()
        .setTitle('Server Got a new banner')
        .setColor('#2F3136')
        .setImage(bannerURL)

    return LogChannel.send({
        embeds: [BannerAdd]
    });

})

// Guild Vanity Add
client.on("guildVanityURLAdd", (guild, vanityURL) => {
    const LogChannel = client.channels.cache.get(chconfig.logchannel); // Replace with your channel id
    const VanityAdd = new MessageEmbed()
        .setTitle('Vanity Link Added')
        .setColor('#2F3136')
        .setDescription(`${guild.name} has a vanity link ${vanityURL}`);
    return LogChannel.send({
        embeds: [VanityAdd]
    });
})

// Guild Vanity Remove
client.on("guildVanityURLRemove", (guild, vanityURL) => {
    const LogChannel = client.channels.cache.get(chconfig.logchannel); // Replace with your channel id
    const VanityRemove = new MessageEmbed()
        .setTitle('Vanity Link Removed')
        .setColor('#2F3136')
        .setDescription(`${guild.name} has removed its vanity URL ${vanityURL}`);
    return LogChannel.send({
        embeds: [VanityRemove]
    });
})

// Guild Vanity Link Updated
client.on("guildVanityURLUpdate", (guild, oldVanityURL, newVanityURL) => {
    const LogChannel = client.channels.cache.get(chconfig.logchannel); // Replace with your channel id
    const VanityUpdated = new MessageEmbed()
        .setTitle('Vanity Link Updated')
        .setColor('#2F3136')
        .setDescription(`${guild.name} has changed its vanity URL from ${oldVanityURL} to ${newVanityURL}!`);
    return LogChannel.send({
        embeds: [VanityUpdated]
    });
})

// Message Deleted
client.on("messageDelete", async (messageDelete) => {
    const LogChannel = client.channels.cache.get(chconfig.logchannel);
    const MessageDeleted = new MessageEmbed()
        .setTitle('Message Deleted')
        .setColor('RED')
        .setThumbnail(`${messageDelete.author.displayAvatarURL({dynamic: true})}`)
        .addField('Message Author', `<@${messageDelete.author.id}>`)
        .addField('Channel', `<#${messageDelete.channel.id}>`)
        .addField('Content', `${messageDelete.content}`)
        .setTimestamp()
    return LogChannel.send({
        embeds: [MessageDeleted]
    });
});

// Message Edited
client.on("messageContentEdited", (message, oldContent, newContent) => {
    const LogChannel = client.channels.cache.get(chconfig.logchannel); // Replace with your channel id
    const MessageEdited = new MessageEmbed()
        .setTitle('Message Edited')
        .setDescription('\n\n\n')
        .setColor('ORANGE')
        .setThumbnail(`${message.author.displayAvatarURL({dynamic: true})}`)
        .addField('Message Author', `<@${message.author.id}>`)
        .addField('Channel', `<#${message.channel.id}>`)
        .addField('Old Content', `${oldContent}`)
        .addField('New Content', `${newContent}`)
        .setTimestamp()
    return LogChannel.send({
        embeds: [MessageEdited]
    });
})