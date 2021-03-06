const Discord   = require('discord.js');
const DM        = require("discord-yt-player");

const client = new Discord.Client({
    autoReconnect: true, 
    max_message_cache: 0
});
 
// Music Bot :: START
const bot = new DM.DiscordMusic(client);
bot.setup({
    token_key: process.argv[2], // Individual App Bot User Token
    server_id: process.argv[3], // Server ID
    channels: {
        voice_channel_id: process.argv[4], // Voice Channel ID
        text_channel_id: process.argv[5] // Text Channel ID
    },
    yt_api_key: process.argv[6] // Youtube Api Key
});
// Music Bot :: END 
