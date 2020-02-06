const request = require("request");
const Discord = require('discord.js');
const client = new Discord.Client();

var tweets = ["Math problem.  I can make two pizzelles every two minutes.  I have to make 100 pizzelles. How long will I be making pizzelles?",
              "Shaun is poppin in his all black get up", "Coach is poppin it at #Littleton skate city.", "Shaun dropped Austin at practice. #tool",
              "I dont have any tools on my Christmas wish list because I already have #Shaun and #Austin", 
              "The only thing dumber than my puppy #mistee wanting a ball that is not under the table is #Austin who is looking under the table for it",
              "Ben's socks are stinky.", "Reeeeeedddddd robin.... YYYUUUMMMMMMM", "Feeling a little hungry.  Where the heck are the ding dongs?",
              "Quote of day from @shaunygmoe: How much does the FREE room cost?", "The apocalypse is upon us.  Free bottomless fries at #RedRobin before your lunch are gone!",
              "What happens in vegas stays in Vegas.", "The wife just called me the coachin bitch instead of the poppin coach... #truefeelings #loveher",
              "Taxes will be the death of me.", "Feeling a little hungry.  Where the heck are the ding dongs?", "Feeling a little hungry.  Where the heck are the ding dongs?",
              "Feeling a little hungry.  Where the heck are the ding dongs?", "Feeling a little hungry.  Where the heck are the ding dongs?", "Feeling a little hungry.  Where the heck are the ding dongs?",
              "Feeling a little hungry.  Where the heck are the ding dongs?", "Feeling a little hungry.  Where the heck are the ding dongs?"];

var response = "You're gonna build a car to beat Ferrari with... a Ford.";

const admins = ["192482333562109952", "402199562707795979"];

const triggers = ["rainbowsix", "rainbow6", "r6", "ranbo", "rainbo", "ranbis",
        "rounds", "comp", "rank", "roomfor", "playin", "geton", "ragequit",
        "headshot", "onetap", "copper", "bronze", "silver", "gold", "plat",
        "diamond", "champ", "peek", "pest", "match", "mmr", "flick",
        "wamai", "kali", "amaru", "goyo", "nokk", "warden", "mozzie",
        "gridlock", "nomad", "kaid", "clash", "mav", "maestro", "alibi", "lion",
        "finka", "vigil", "dokkaebi", "zofia", "ela", "ying", "mira",
        "jackal", "hibana", "echo", "cav", "cap", "blackbeard", "valk", "buck",
        "frost", "mute", "sledge", "smoke", "thatch", "ash", "castle", "pulse",
        "thermite", "mont", "twitch", "doc", "rook", "jager", "bandit", "blitz",
        "iq", "fuze", "glaz", "tachanka", "kap"];

const gamers = new Map([
    ["175456691620413440", "LRN--"],
    ["267187720730705921", "acoconut42."],
    ["402199562707795979", "P.Chip555"],
    ["141677063949123584", "Taco.WC"],
    ["376561091431628800", "dangles33."],
    ["318587632848338956", "ImShed"],
    ["135944067140812802", "MediaMuffin"],
    ["106462328920219648", "Wolfy.WC"],
    ["610243961302548491", "copsgoturdope.-"],
    ["135944067140812802", "MoustacheDragoo"],
    ["192482333562109952", "bilal.-"]
]);

const ranks = new Map([
    [0, "unranked"],
    [1, "Copper IV"],
    [2, "Copper III"],
    [3, "Copper II"],
    [4, "Copper I"],
    [5, "Bronze IV"],
    [6, "Bronze III"],
    [7, "Bronze II"],
    [8, "Bronze I"],
    [9, "Silver IV"],
    [10, "Silver III"],
    [11, "Silver II"],
    [12, "Silver I"],
    [13, "Gold IV"],
    [14,, "Gold III"],
    [15, "Gold II"],
    [16, "Gold I"],
    [17, "Platinum III"],
    [18, "Platinum II"],
    [19, "Platinum I"],
    [20, "Diamond"],
    [21, "Champion"]
]);

const gamersToRank = ["135944067140812802"];

//Hourglasses Grayson
client.on('message', msg => {
    if(msg.author.id === "135944067140812802") {
        msg.react('⌛');
    }
});
//Responds "What is a pog?" or provides the definition
client.on('message', msg => {
    if(msg.content.toLowerCase().includes('pog')) {
        if (!msg.author.bot) {
            if(!msg.content.toLowerCase().includes('what is a')){
                msg.reply('what is a pog?');
            } else {
                msg.reply('According to Urban Dictionary, a Pog is defined as "A emote found on twitch.tv, often used when a streamer does something cool. This emote can only be seen if you have the chrome extensions BTTV (Better TwitchTV) and FFZ (FrankerFaceZ) installed. It is a variation of the emote "PogChamp" but it is only the mouth."');
            }
        }
    }
});

//Responds "Feeling a little hungry? Where the heck are the ding dongs?"
// or asks about pizza rolls
client.on('message', msg => {
    if(msg.content.toLowerCase().includes('hungry')) {
        if(!msg.author.bot) {
            msg.reply('Feeling a little hungry? Where the heck are the ding dongs?');
        } 
    } else if (msg.content.toLowerCase().includes('17')) {
        if(!msg.author.bot) {
            msg.reply('You ate 17 pizza rolls?!?!')
        } 
    }
});

//Responds creator of Hourglass Bot
client.on('message', msg => {
    if(msg.content.toLowerCase() === 'who is the true creator of hourglass bot?') {
        msg.reply('I was made by P.Chip555 and Bilal.');
    }
});
             
//Responds with a tweet from Array tweets
client.on('message', msg => {
    if(msg.content.toLowerCase() === '!tweetme') {
        
        msg.reply(tweets[Math.floor(Math.random() * 20)]);
    }
});

//Responds with "Forbidden Word Detected!" If a forbidden word is sent
client.on('message', msg => {
    if(msg.content.toLowerCase().includes('weeb') || msg.content.toLowerCase().includes('anime') || msg.content.toLowerCase().includes('lesion')) {
        if(!msg.author.bot) {
         msg.reply('Forbidden Word Detected!');
    }
}
});

//Responds with "Goodnight Gamer"
client.on('message', msg => {
    if(msg.content.toLowerCase().includes('goodnight')) {
        if(!msg.author.bot) {
            msg.reply('Goodnight Gamer');
        }
    }
});

//Responds with "My purpose is to hourglass MediaMuffin"
client.on('message', msg => {
    if(msg.content.toLowerCase() === 'what is your purpose hourglass bot?') {
        if(!msg.author.bot) {
            msg.reply('My purpose is to hourglass MediaMuffin')
        }
    }
});
//Responds with "You're gonna build a car to beat Ferrari with... a Ford."
client.on('message', msg => {
    if(msg.content.toLowerCase().includes('ford')) {
        if(!msg.author.bot) {
            msg.reply(response);
        }
    }
});

// add/remove gamers to gamersToRank and print a gamer's rank
client.on("message", message => {
    if (admins.includes(message.author.id)) {
        if (message.content.substring(0,4) === "!add") {
            for (const id of message.mentions.users.keys()) {
                if (!gamersToRank.includes(id)) {
                    gamersToRank.push(id);
                }
            }
        } else if (message.content.substring(0,7) === "!remove") {
            for (const id of message.mentions.users.keys()) {
                if (gamersToRank.includes(id)) {
                    gamersToRank.splice(gamersToRank.indexOf(id), 1)
                }
            }
        }
        console.log(gamersToRank);
    }
    if (gamersToRank.includes(message.author.id)) {
        for (const t of triggers) {
            if (message.content.replace(/\s/g, '').toLowerCase().includes(t)) {
                replyRank(message);
                break;
            }
        }
    }
});

// fetch rank
function replyRank(message) {
    url = buildRequestURL(message.author.id);
    console.log(url);
    request(url, {json : true}, (err, res, body) => {
        if (err) {
            console.log(err);
            return;
        }
        rank = ranks.get(body.results[0].p_currentrank);
        kd = body.results[0].kd / 100.0;
        message.reply( "you are " + rank + " with a " + kd + " K/D ratio.");
    });
}

// creates GET url for r6tab API
function buildRequestURL(id) {
    name = gamers.get(id);
    return "https://r6tab.com/api/search.php?platform=uplay&search=" + name;
}

client.login(process.env.token);
