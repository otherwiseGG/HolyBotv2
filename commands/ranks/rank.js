const {Message, Client, MessageEmbed} = require("discord.js");
const config = require("../../botconfig/main.json");
const mysql = require("mysql")
module.exports = {
    name: "rank",
    aliases: ["xp"],
    cooldowns: 0,
    description: "Shows your XP ",
    usage: "rank",
    toggleOff: false,
    developersOnly: false,
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, con) => {
        let target = message.mentions.users.first() || message.author;
        con.query(`SELECT *
                   FROM xp
                   WHERE user_id = '${target.id}'`, (err, rows) => {
            if (err) {
                throw err;
            }

            if (!rows[0]) {
                return message.channel.send(`${target.username} has no XP on record.`);
            }

            let xp = rows[0].xp;
            let level = rows[0].lvl //Math.floor(xp / config.levelXP);
            let needXP = (level + 1) * config.levelXP - xp;

            let info = new MessageEmbed()
                .setTitle(`${target.username}'s Leveling Info`)
                .setDescription('Level up by constantly participating in the chat')
                .setColor(0x800080)
                .setThumbnail(`${message.author.displayAvatarURL()}`)
                .addField('Current XP', `${xp}`, true)
                .addField('Current Level', `${level}`, true)
                .addField('XP needed for next level', `${needXP}`, true)
                .setFooter(`${target.username}`, `${message.author.displayAvatarURL()}`)
                .setTimestamp(new Date());


            message.channel.send({embeds: [info]});
        });
    },
};
