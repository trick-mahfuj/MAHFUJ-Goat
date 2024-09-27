module.exports = {
config: {
name: "😅",
version: "2.0.0",
author: "Haru",
cooldown: 5,
role: 0,
shortDescription: "Autoresponds with reactions and replies",
longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
category: "sarcasm",
guide: "?autorespondv3",
},
onStart: async ({ api, event }) => {
// Blank onStart function as per the request
},
onChat: async ({ api, event }) => {
const { body, messageID, threadID } = event;

// Reactions based on words
const emojis = {
"💜": ["mateo", "Gerald", "gerald", "Mateo", "hi", "hello", "hai", "hallo", "Hi", "Hello", "Hai", "Hello"],
"💚": ["dia", "seyj", "ginanun", "gaganunin", "pfft", "xyrene", "gumanun"],
"😾": ["Jo", "Ariii", "talong", "galit"],
"😼": ["wtf", "fck", "haaays", "naku", "ngi ", "ngek", "nge ", "luh", "lah"],
"😸": ["pill", "laugh", "lt ", "gagi", "huy", "hoy"],
"🤖": ["bot", "Bot"],
"⏳": ["prodia", "sdxl", "bardv3", "tanongv2", "-imagine", "genimg", "Tanongv4", "-shortcut","ai","Ai"],
"🔥": ["apoy", "lakas", "astig", "damn", "angas", "galing", "husay"],
};

// Replies to specific words
const replies = {
"Bye": "bye-bye see you next time buddy come-on give me a hug before you leave 🥺.",
"@Videl Chan": "Hi, that's my owner.", 
"videl": "yeah that's my owner",
"mateo": "hello, how may I help you dear, I'm an ai assistant made by gerald.",
"Mateo": "hello, how may I help you dear friend, I'm an artificial intelligence product by gerald max",
"Hi": "hi how are you today",
"I'm fine": "good to know, I'm charged fully too",
"hello": "hi, what do u need.",
"hi": "hi dear😌👌",
"who's your owner": "gerald max: Facebook name is videl chan"
};

// React based on words
for (const [emoji, words] of Object.entries(emojis)) {
for (const word of words) {
if (body.toLowerCase().includes(word)) {
api.setMessageReaction(emoji, messageID, () => {}, true);
}
}
}

// Reply based on triggers
for (const [trigger, reply] of Object.entries(replies)) {
if (body.toLowerCase().includes(trigger)) {
api.sendMessage(reply, threadID, messageID);
}
}
},
}; {}, true);
}
}
}

// Reply based on triggers
for (const [trigger, reply] of Object.entries(replies)) {
if (body.toLowerCase().includes(trigger)) {
api.sendMessage(reply, threadID, messageID);
}
}
},
};}
},
};};}
},
};essage(reply, threadID, messageID);
}
}
},
};}
},
};