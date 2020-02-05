const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!')
});
/*
client.on('message', msg => {
    if(msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.on('message', msg => {
    if(message.toLowerCase().includes(wordPing.toLowerCase())) {
        msg.reply('pong');
    }
});


client.on('message', msg => {
    if(msg.content.toLowerCase().includes('hourglass')) {
        msg.react('⌛');
    }
}); 
*/
client.on('message', msg => {
    if(msg.author.id === "135944067140812802") {

        msg.react('⌛');
    }
});

client.on('message', msg => {
    if(msg.content.toLowerCase().includes('pog')) {
        if(!msg.content.toLowerCase().includes('what is a')){
            if(!msg.author.bot) {
             //msg.react("659973876205486101");  
             msg.reply('what is a pog?');   
    }
}
    }
});

client.on('message', msg => {
    if(msg.content.toLowerCase().includes('hungry')) {
        if(!msg.author.bot) {
        msg.reply('Feeling a little hungry? Where the heck are the ding dongs?');
    }
}
});

client.on('message', msg => {
    if(msg.content.toLowerCase().includes('what is a pog?')) {
        if(!msg.author.bot) {
            msg.reply('According to Urban Dictionary, a Pog is defined as "A emote found on twitch.tv, often used when a streamer does something cool. This emote can only be seen if you have the chrome extensions BTTV (Better TwitchTV) and FFZ (FrankerFaceZ) installed. It is a variation of the emote "PogChamp" but it is only the mouth."');
        }
    }
});

client.on('message', msg => {
    if(msg.content.toLowerCase() === 'who is the true creator of hourglass bot?') {
        msg.reply('The true creator of Hourglass Bot is P.Chip555');
    }

});
/*
client.on('message', msg => {
    if(msg.content.toLowerCase() === 'test') {
        msg.reply('Test did not fail!');

    }
});
*/

client.login(process.env.token);
