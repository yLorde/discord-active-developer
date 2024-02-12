const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMembers
    ],
});

client.on('ready', async () => {
    client.application.commands.create({
        name: 'ping',
        description: 'response pong!'
    });
});

client.on('interactionCreate', async (i) => {
    if (i.commandName === 'ping') {
        i.reply({
            content: 'Pong :ping_pong:'
        });
    };
})

client.login('YOUR_TOKEN_HERE');