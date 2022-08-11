const client = require("../index.js");
const {
    Client,
    Message,
    MessageEmbed,
    Discord
} = require('discord.js');
const eeconfig = require('../botconfig/emojis.json')

client.on("messageCreate", (message) => {
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    const guild = message.guild
    const tigerEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holytiger));
    const holyEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holy));
    const raptorEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holyraptor));
    const cobraEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holycobra));
    const holymolyEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holymoly));
    const bearEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holybear));
    const coconutEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holycoconut));
    const blueberryEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holyblueberry));
    const sharkEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holyshark));
    const lizardEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holylizard))
    const lionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holylion))
    const kiwiEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holykiwi))
    const mangoEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holymango))
    const pantherEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holypanther));
    const peachEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.holypeach));
    const deerEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.deer));
    const bennyEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.benny))
    const bananaEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.banana))
    const modsEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.mods))
    const sarahEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.sarah))
    const moritzEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.moritz))
    const dustinEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.dustin))
    const danielEmoji = message.guild.emojis.cache.find(emoji => emoji.name === (eeconfig.daniel))
    const messageToLower = message.content.toLowerCase();

    //HOLY
    switch (true) {
        case messageToLower.includes('holy'):
            message.react(eeconfig.rocket) && message.react(holyEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('chemie'):
            message.react(eeconfig.chemiekeule);
            break;
    }
    switch (true) {
        case messageToLower.includes('tiger'):
            message.react(tigerEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('lion'):
            message.react(lionEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('raptor'):
            message.react(raptorEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('cobra'):
            message.react(cobraEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('shark'):
            message.react(sharkEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('moly'):
            message.react(holymolyEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('lizard'):
            message.react(lizardEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('kiwi'):
            message.react(kiwiEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('mango'):
            message.react(mangoEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('deer'):
            message.react(deerEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('panther'):
            message.react(pantherEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('peach'):
            message.react(peachEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('bear'):
            message.react(bearEmoji);
            break;
    }
        switch (true) {
        case messageToLower.includes('coconut'):
            message.react(coconutEmoji);
            break;
    }
        switch (true) {
        case messageToLower.includes('kokosnuss'):
            message.react(coconutEmoji);
            break;
    }
            switch (true) {
        case messageToLower.includes('blueberry'):
            message.react(blueberryEmoji);
            break;
    }
            switch (true) {
        case messageToLower.includes('blaubeere'):
            message.react(blueberryEmoji);
            break;
    }
    

    //BENNY
    switch (true) {
        case messageToLower.includes('benny'):
            message.react(bennyEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('benani'):
            message.react(bennyEmoji) && message.react(bananaEmoji);
            break;
    }
        switch (true) {
        case messageToLower.includes('weatherstation'):
            message.react(moritzEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('wetterstation'):
            message.react(moritzEmoji);
            break;
    }
        switch (true) {
        case messageToLower.includes('bretterstation'):
            message.react(moritzEmoji);
            break;
    }

    //DC
    switch (true) {
        case messageToLower.includes('mods'):
            message.react(modsEmoji);
            break;
    }

    //Einzelpersonen
    switch (true) {
        case messageToLower.includes('sarah'):
            message.react(sarahEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('blitzwölckchen'):
            message.react(sarahEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('blitzwoelkchen'):
            message.react(sarahEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('dustin'):
            message.react(dustinEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('daniel'):
            message.react(danielEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('revo'):
            message.react(danielEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('racingrevo'):
            message.react(danielEmoji);
            break;
    }
    switch (true) {
        case messageToLower.includes('naddy'):
            message.react("🐺");
            break;
    }
})
