const client = require("../index.js");
const {
    Client,
    Message,
    MessageEmbed,
    Discord
} = require('discord.js');

const restartMessage = new MessageEmbed()
.setColor('BLUE')
.setTitle('HOLY Discord Bot restarted')
.setDescription('✅ - HOLY Discord Bot successfully restarted.')
.setTimestamp()
client.on("ready", () => {
    const channel = client.channels.cache.get('833690671906291712');
    if (!channel) return console.log("Invalid channel.");

    channel.send({
     embeds: [restartMessage]
     });
});
