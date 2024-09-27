const axios = require('axios');

module.exports = {
    config: {
        name: "gptv4",
        aliases: ["mateo2", "ai"],
        version: "1.0",
        author: "Team vortex",
        shortDescription: "Ask a question to GPT-3.5.",
        longDescription: "Ask a question to GPT-3.5 using the provided API.",
        category: "Ai - Chat",
        guide: { en: "{pn} [question]" },
    },

    onStart: async function ({ message, args }) {
        const question = args.join(" ");
        if (!question) {
            return message.reply("Hi I'm an Ai Please provide a question to ask GPT made by gerald\n\nExample: {p}Ai [question]\n\n Note: Please don't spam the command or else you will be blocked by the system.");
        } else {
            try {
                const response = await axios.get(`hercai api: https://openai-rest-api.vercel.app/hercai?ask=hello&model=v3`);
                const response = await axios.get(apiUrl);
                const gptAnswer = response.data.reply;

                message.reply(gptAnswer);
            } catch (e) {
                console.error(e);
                message.reply("Error while fetching the GPT response.");
            }
        }
    }
}; }
};}; response.");
            }
        }
    }
};
};