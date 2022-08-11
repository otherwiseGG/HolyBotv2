const {Message, Client, MessageEmbed} = require("discord.js");
const numbers = [':one:', ':two:', ':three:', ':four:', ':five:', ':six:', ':seven:', ':eight:', ':nine:', ':ten:'];
const mysql = require("mysql")
module.exports = {
    name: "leaderboard",
    aliases: ["lb"],
    cooldowns: 0,
    description: "Shows XP Leaderboard",
    usage: "leaderboard",
    toggleOff: false,
    developersOnly: false,
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, con) => {

        con.query('SELECT id, user_id, xp, lvl, username FROM xp ORDER BY xp DESC', (err, rows) => {
            if (err) {
                throw err;
            }

            const embed = new MessageEmbed()
                .setColor('#800080')
                .setTitle(':money_with_wings: Top 10 XP Leaderboard')
                .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())

            let order = 0;
            for (let i = 0; i < 10; i++) {
                if (i > rows.length - 2) {
                    break;
                }

                if (message.guild.members.cache.get(rows[i].user_id)) {
                    const user = message.guild.members.cache.get(rows[i].user_id).user;
                    if (!user.bot) {
                        embed.addField(`${numbers[order]} Username`, `${user.username}`, true)
                        embed.addField(`Level`, `${rows[i].lvl}`, true)
                            .addField('Total XP', `${rows[i].xp}`, true);
                        order++;
                    }
                }
            }

            message.channel.send({embeds: [embed]});
        });
    },
};
