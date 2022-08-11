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

client.on("guildMemberRemove", async (member) => {
    const goodbyeChannel = await db.fetch(`GC-${member.guild.id}`);
    if (!goodbyeChannel) return;
    const goodbyeMessage = (
        (await db.fetch(`GM-${member.guild.id}`)) ||
        `${member.user.username} Has Left The Server!`
    )
        .replace(/<servername>/g, member.guild.name)
        .replace(/<membername>/g, member.user.username)
        .replace(/<membermention>/g, `<@${member.user.id}>`);

    if (member.user.username.length > 25)
        member.user.username = member.user.username.slice(0, 25) + "...";
    if (member.guild.name.length > 15)
        member.guild.name = member.guild.name.slice(0, 15) + "...";

    const goodbyeImageAttachment = await new canvas.Goodbye()
        .setUsername(member.user.username)
        .setDiscriminator(member.user.discriminator)
        .setGuildName(member.guild.name)
        .setAvatar(member.user.displayAvatarURL({
            dynamic: false,
            format: "jpg"
        }))
        .setMemberCount(member.guild.memberCount)
        .setBackground(
            Array.isArray(GoodBye_Images) ?
                GoodBye_Images[Math.floor(Math.random() * GoodBye_Images.length)] :
                GoodBye_Images ||
                "https://images.wallpaperscraft.com/image/cat_night_lights_74375_1280x720.jpg"
        )
        .toAttachment();

    return client.channels.cache.get(goodbyeChannel).send({
        content: goodbyeMessage,
        files: [{
            attachment: goodbyeImageAttachment.toBuffer(),
            name: "Goodbye.png",
        },],
    });
});