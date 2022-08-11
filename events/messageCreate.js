const client = require("../index");
const {
    MessageEmbed
} = require("discord.js");
const chalk = require("chalk");
const ms = require("ms");
const mysql = require("mysql");
const config = require('../botconfig/main.json');
const {
    developerID
} = require("../botconfig/main.json");
const {
    discordteam
} = require("../botconfig/roles.json");
const {
    clientavatar
} = require("../botconfig/main.json");
const {
    clientname
} = require("../botconfig/main.json");
const prefix = client.config.prefix;
const {
    randomMessages_Cooldown
} = require("../botconfig/main.json");
// set up the mysql account info

const con = mysql.createConnection({
    host: client.config.mysql_host,
    user: client.config.mysql_user,
    password: client.config.mysql_password,
    database: client.config.mysql_database,
});

// connect to mysql database
con.connect(err => {
    if (err) {
        console.log(err.message);
        throw err;
    }
    console.log('Connected to mySQL database!');
});

// used to generate a random value within a range
function generateXp(min, max) {
    return Math.ceil(Math.random() * (max - min + 1));
}

let levelup = config.levelXP; //how much xp need for level up

client.on("messageCreate", async (message) => {
    // if the message is from a bot, ignore it
    if (message.author.bot) return;
    // Remove Discord Invites
  if (message.content.includes('http://discord.gg/') || message.content.includes('https://discord.gg/') || message.content.includes('discord.gg/')) return message.delete()
    con.query(`SELECT *
               FROM xp
               WHERE user_id = '${message.author.id}'`, function (err, rows) { //selecting user id & username
        if (err) throw err;
        let sql;
        if (rows.length < 1) { //if the user has no info in table | no id it inserts ID - XP - LEVEL 
            sql = `INSERT INTO xp (user_id, xp, lvl, username, avatar)
                   VALUES ('${message.author.id}', '${generateXp(10, 30)}', '1', '${message.author.username}', '${message.author.avatarURL()}')`;
        } else {
            let xp = rows[0].xp; //xp = the amount xp in database

            sql = `UPDATE xp
                   SET xp = ${xp + generateXp(10, 30)}
                   WHERE user_id = '${message.author.id}'`; //update xp

            let nxtLvl = rows[0].lvl * levelup;  //how many +1 level per xp points

            if (nxtLvl <= rows[0].xp) { //If level surpass that amount it
                con.query(`UPDATE xp
                           SET lvl = ${rows[0].lvl + 1}
                           WHERE user_id = '${message.author.id}'`) //updates level
            }

            //levelup message 
            if (nxtLvl <= rows[0].xp) {

                const channel = message.guild.channels.cache.get(config.levelUpChannel);
                const lvlup = new MessageEmbed()
                    .setDescription(`Hey!, <@${message.member.id}> you are now level ${rows[0].lvl + 1}`)
                    .setColor("RANDOM")
                channel.send({embeds: [lvlup]})
            }
        }
        con.query(sql)
    })
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.config.prefix)
    )
        return;
    if (!message.member)
        message.member = await message.guild.fetchMember(message);
    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(" ");
    let noargs_embed = new MessageEmbed()
        .setTitle(`:x: | Please Provide A Command To Be Executed!`)
        .setColor("RED")
        .setFooter(`${clientname}`, `${clientavatar}`)
        .setTimestamp();
    if (cmd.length === 0) return message.reply({
        embeds: [noargs_embed]
    });

    const command =
        client.commands.get(cmd.toLowerCase()) ||
        client.commands.find((c) => c.aliases?.includes(cmd.toLowerCase()));
    let nocmd_embed = new MessageEmbed()
        .setTitle(`:x: | No Command Found! Try Using  \`${prefix}help\``)
        .setColor("RED")
        .setFooter(`${clientname}`, `${clientavatar}`)
        .setTimestamp();
    if (!command) return message.channel.send({
        embeds: [nocmd_embed]
    });
    if (command.toggleOff) {
        let toggleoff_embed = new MessageEmbed()
            .setTitle(
                `:x: | That Command Has Been Disabled By The Developers! Please Try Later.`
            )
            .setColor("RED")
            .setFooter(`${clientname}`, `${clientavatar}`)
            .setTimestamp();
        return message.reply({
            embeds: [toggleoff_embed]
        });
    } else if (!message.member.permissions.has(command.userpermissions || [])) {
        let userperms_embed = new MessageEmbed()
            .setTitle(`:x: | You Don't Have Permissions To Use The Command!`)
            .setColor("RED")
            .setFooter(`${clientname}`, `${clientavatar}`)
            .setTimestamp();
        return message.reply({
            embeds: userperms_embed
        });
    } else if (!message.guild.me.permissions.has(command.botpermissions || [])) {
        let botperms_embed = new MessageEmbed()
            .setTitle(`:x: | I Don't Have Permissions To Use The Command!`)
            .setColor("RED")
            .setFooter(`${clientname}`, `${clientavatar}`)
            .setTimestamp();
        return message.reply({
            embeds: [botperms_embed]
        });
    } else if (command.developersOnly) {
        if (!developerID.includes(message.author.id)) {
            let developersOnly_embed = new MessageEmbed()
                .setTitle(`:x: | Only Developers Can Use That Command!`)
                .setDescription(
                    `Developers: ${developerID.map((v) => `<@${v}>`).join(",")}`
                )
                .setColor("RED")
                .setFooter(`${clientname}`, `${clientavatar}`)
                .setTimestamp();
            return message.reply({
                embeds: [developersOnly_embed]
            });
        }
    } else if (command.cooldowns) {
        if (client.cooldowns.has(`${command.name}${message.author.id}`)) {
            let cooldown_embed = new MessageEmbed()
                .setTitle(
                    `${
                        randomMessages_Cooldown[
                            Math.floor(Math.random() * randomMessages_Cooldown.length)
                            ]
                    }`
                )
                .setDescription(
                    `You Need To Wait \`${ms(
                        client.cooldowns.get(`${command.name}${message.author.id}`) -
                        Date.now(),
                        {long: true}
                    )}\` To Use \`${prefix}${command.name}\` again!`
                )
                .setColor("BLUE")
                .setFooter(`${clientname}`, `${clientavatar}`)
                .setTimestamp();

            return message.reply({
                embeds: [cooldown_embed]
            });
        }

        client.cooldowns.set(
            `${command.name}${message.author.id}`,
            Date.now() + command.cooldowns
        );

        setTimeout(() => {
            client.cooldowns.delete(`${command.name}${message.author.id}`);
        }, command.cooldowns);
    }
    await command.run(client, message, args, con);
});
