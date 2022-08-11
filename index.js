console.clear();

const {
    Discord,
    Client,
    Collection,
    WebhookClient,
    MessageEmbed,
    Message
} = require("discord.js");
// Import Discord.Js.
const client = new Client({
    intents: 32767
});
// Make New Discord Client
module.exports = client;
// Export Client To Give Other Files Access.
const chalk = require("chalk");
// Import Chalk
const xfinity = require("xfinity");
//Import xfinity
const config = require("./botconfig/main.json");
const moment = require("moment");
//
const canvas = require("discord-canvas"),
    db = require("old-wio.db");
//
const {
    Support,
    Color,
    Welcome_Images,
    GoodBye_Images,
} = require("./config.js");
require("dotenv").config();
// ———————————————[Global Variables]———————————————
client.commands = new Collection();
client.aliases = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();
client.config = require("./botconfig/main.json");
require("./handler")(client);
// Initializing the project.

//Ticket Interaction
const simplydjs = require("simply-djs")
client.on("interactionCreate", interaction => {
    // interactionCreate Event
    simplydjs.clickBtn(interaction, {
        embedDesc: `Hello There!\n\n The HOLY Team will be right with you.\n Meanwhile, why dont you tell us a little bit more about your issue?\n\n
        **If you opened this Ticket by accident, please let us know inside of it and press the Blue "Close" Button.**\n\n *Please refrain from pinging us, we will be with you soon!*`,
        embedColor: "#075FFF", // default: #075FFF
        closeColor: "PRIMARY",
        closeEmoji: "🔒",
        delColor: "DANGER",
        delEmoji: "🗑️", // default: ❌
        openColor: "PRIMARY",
        openEmoji: "🔓",
        timeout: false,
        cooldownMsg: "Slow It Down Fam...",
        categoryID: "900451654560784434",
        role: "900458627398242325",
        logChannel: "900451914121093140",
        ticketname: "ticket-{tag}", // Custom Ticket name. {tag} | {id} | {username}
        credit: false
    });
})

// ———————————————[TikTok]———————————————
// ———————————————[Instagram]———————————————
// ———————————————[Facebook]———————————————
// ———————————————[RESTART]———————————————

// Initialise discord giveaways
const {
    GiveawaysManager
} = require("discord-giveaways");
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./storage/giveaways.json",
    default: {
        botsCanWin: false,
        embedColor: "#2F3136",
        reaction: "🎉",
        lastChance: {
            enabled: true,
            content: `🛑 **Last chance to enter** 🛑`,
            threshold: 5000,
            embedColor: '#FF0000'
        }
    }
});
// ———————————————[Invite Logs]———————————————
client.on("invitelog", (member, invite, inviter) => {
    console.log();
    console.log(
        chalk.white("["),
        chalk.red.bold("InviteLogger"),
        chalk.white("]"),
        chalk.gray(" : "),
        chalk.gray.bold(`${member} has joined by using ${invite.code}. Invited by ${inviter}`)
    );
});
// ———————————————[XP]———————————————
// ———————————————[MODLOGS]———————————————
const logs = require('discord-logs');
logs(client, {
    debug: false
});
// ———————————————[Logging Into Client]———————————————
const token = process.env["clienttoken"] || client.config.clienttoken;
if (token === "") {
    console.log(chalk.gray("—————————————————————————————————"));
    console.log(
        chalk.white("["),
        chalk.red.bold("AntiCrash"),
        chalk.white("]"),
        chalk.gray(" : "),
        chalk.white.bold("Invalid Token")
    );
    console.log(chalk.gray("—————————————————————————————————"));
    console.log(chalk.magenta("There Are 3 Ways To Fix This"));
    console.log(
        chalk.blue("Put Your ") + chalk.red("Bot Token ") + chalk.blue("in:")
    );
    console.log(
        chalk.yellow.bold("1.) ") +
        chalk.cyan("index.js") +
        chalk.gray(
            " On the client.login line remove client.login(token) and write client.login('token')"
        )
    );
    console.log(
        chalk.yellow.bold("2.) ") +
        chalk.cyan("ENV/Secrets") +
        chalk.gray(
            " ENV NEEDED"
        )
    );
    console.log(
        chalk.yellow.bold("3.) ") +
        chalk.cyan("main.json ") +
        chalk.gray(
            'main.json token needed '
        )
    );
} else {
    client.login(token);
    xfinity.invitelogger(client);
}
// Login The Bot.
// ———————————————[Error Handling]———————————————
process.on("unhandledRejection", (reason, p) => {
    console.log(chalk.gray("—————————————————————————————————"));
    console.log(
        chalk.white("["),
        chalk.red.bold("AntiCrash"),
        chalk.white("]"),
        chalk.gray(" : "),
        chalk.white.bold("Unhandled Rejection/Catch")
    );
    console.log(chalk.gray("—————————————————————————————————"));
    console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
    console.log(chalk.gray("—————————————————————————————————"));
    console.log(
        chalk.white("["),
        chalk.red.bold("AntiCrash"),
        chalk.white("]"),
        chalk.gray(" : "),
        chalk.white.bold("Uncaught Exception/Catch")
    );
    console.log(chalk.gray("—————————————————————————————————"));
    console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
    console.log(chalk.gray("—————————————————————————————————"));
    console.log(
        chalk.white("["),
        chalk.red.bold("AntiCrash"),
        chalk.white("]"),
        chalk.gray(" : "),
        chalk.white.bold("Multiple Resolves")
    );
    console.log(chalk.gray("—————————————————————————————————"));
    console.log(type, promise, reason);
});
