const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "faq",
    aliases: ["", "", ""],
    cooldowns: 0,
    description: "Sends First Page of FAQ",
    usage: "faq",
    toggleOff: false,
    developersOnly: false,
    userpermissions: ["MANAGE_SERVER"],
    botpermissions: ["ADMINISTRATOR"],

    run: async (client, message) => {
        const faq = new MessageEmbed()
            .setAuthor(`HOLY ENERGY FAQ`, message.author.avatarURL())
            .setColor('GOLD')
            .setThumbnail('https://cdn.discordapp.com/attachments/900752414611734558/915901093978972200/a_001d9410ba3f190dec3c87fe09c7fce0.gif')
            .addFields({
                name: 'Flavor XY is sold out! When is the flavor available again?',
                value: 'It can happen that certain varieties are sometimes sold out. Don\'t worry, these will be reordered as soon as possible and we will keep you up to date on our social media and Discord channels!\n'
            })
        const faq2 = new MessageEmbed()
            .setAuthor(`HOLY ENERGY FAQ`, message.author.avatarURL())
            .setColor('GOLD')
            .addFields({
                name: 'A white layer settles at the bottom. What is this?',
                value: 'The white that settles on the bottom is our fiber inulin - so completely normal and harmless. That can not dissolve at all 100%!'
            })
        const faq3 = new MessageEmbed()
            .setAuthor(`HOLY ENERGY FAQ`, message.author.avatarURL())
            .setColor('GOLD')
            .addFields({
                name: 'There are small white balls floating in the Water. What is this?',
                value: 'The small white pieces are our caffeine (NewCaff). That shouldn\'t dissolve yet because it\'s encapsulated caffeine. This dissolves in the stomach so you don\'t get a caffeine rush and crash afterwards.'
            })
        const faq4 = new MessageEmbed()
            .setAuthor(`HOLY ENERGY FAQ`, message.author.avatarURL())
            .setColor('GOLD')
            .addFields({
                name: 'I haven\'t received my Samples yet! What do i do now?',
                value: 'It can happen that some samples are lost due to the number of samples. Be it in the mail or when ordering.\n' +
                    'Please contact our team as soon as possible and we will find a solution.'
            })
        message.delete().then(message.channel.send({embeds: [faq, faq2, faq3, faq4]}))
    }
};