const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


let config = require('./config/bot');

const arrayOfStatus = [
    '☆sᴛᴀʀ❀ᴡᴏʀʟᴅ♬',
    'Nhớ thân thiện nha !',
    'Nhớ đọc rules nha !'
]

client.on('ready', () => {
    console.log(`${client.user.tag} is now online!`)
    setInterval(() => {
        client.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }], status: 'disturb', type: "PLAYING" })
    }, 3000)
})


client.login(config.discord.token);