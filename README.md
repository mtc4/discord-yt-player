# discord-yt-player
Fully Automated Music Bot for the Discord Servers

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

What things you need to install the software and how to install them

```
npm install discord.js
npm install ytdl-core
npm install request
```

### Installing

A step by step series of examples that tell you have to get a development env running

Download discord-yt-player.js

```
const DM = require('discord-yt-player')
```

### Setup
```
bot.setup({
    token_key: '', // Individual App Bot User Token
    server_id: '', // Server ID
    channels: {
        voice_channel_id: '', // Voice Channel ID
        text_channel_id: '' // Text Channel ID
    },
    yt_api_key: '' // Youtube Api Key
});
```
or you can use much more simpler version dedicated for command line
```
bot.setup({
    token_key: process.argv[2], // Individual App Bot User Token
    server_id: process.argv[3], // Server ID
    channels: {
        voice_channel_id: process.argv[4], // Voice Channel ID
        text_channel_id: process.argv[5] // Text Channel ID
    },
    yt_api_key: process.argv[6] // Youtube Api Key
});
```
and simply run it
```
node YOUR_APP.js <TOKEN> <SERVER_ID> <VOICE_CHANNEL_ID> <TEXT_CHANNEL_ID> <YOUTUBE_API_KEY>
```

## Running the tests
Force add songs to the queue
```
setTimeout(function() {

  if(bot.isConnected) {
    bot.listing(
    "YOUTUBE_VIDE_URL_1", 
    "YOUTUBE_VIDE_URL_2",
    "YOUTUBE_VIDE_URL_3",
    "YOUTUBE_VIDE_URL_4");
  } else {
    console.log("not connected");
  }
  
}, 3000);
```

## Built With
* [node-ytdl-core](https://github.com/fent/node-ytdl-core/) - Youtube downloader in javascript.
* [discord.js](https://github.com/fent/node-ytdl-core/) - Youtube downloader in javascript.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This is a very simple project of script in node.js, made for purposes of trying new things in ES6.

