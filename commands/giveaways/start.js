const ms = require("ms");
const messages = require("../util/messages.js");
module.exports = {
    name: "start",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "starts an Giveaway",
    usage: "start",
    toggleOff: false,
    developersOnly: false,
    userpermissions: ["MANAGE_MESSAGES"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message, args) => {

        // Giveaway channel
        let giveawayChannel = message.mentions.channels.first();
        // If no channel is mentionned
        if (!giveawayChannel) {
            return message.reply(":x: You have to mention a valid channel!");
        }

        // Giveaway duration
        let giveawayDuration = args[1];
        // If the duration isn't valid
        if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
            return message.reply(":x: You have to specify a valid duration!");
        }

        // Number of winners
        let giveawayNumberWinners = parseInt(args[2]);
        // If the specified number of winners is not a number
        if (isNaN(giveawayNumberWinners) || parseInt(giveawayNumberWinners) <= 0) {
            return message.reply(
                ":x: You have to specify a valid number of winners!"
            );
        }

        // Giveaway prize
        let giveawayPrize = args.slice(3).join(" ");
        // If no prize is specified
        if (!giveawayPrize) {
            return message.reply(":x: You have to specify a valid prize!");
        }
        // Start the giveaway
        await client.giveawaysManager.start(giveawayChannel, {
            // The giveaway duration
            duration: ms(giveawayDuration),
            // The giveaway prize
            prize: giveawayPrize,
            // The giveaway winner count
            winnerCount: parseInt(giveawayNumberWinners),
            // Who hosts this giveaway
            hostedBy: client.config.hostedBy ? message.author : null,
            // Messages
            messages
        });
        message.reply(`Giveaway started in ${giveawayChannel}!`);
    }
}
