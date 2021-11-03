const { Client, Intents, Message, Collection } = require('discord.js');
const botConfig = require("./botConfig.json");
const fs = require("fs");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	

	client.commands.set(command.help.name, command);

    
    console.log(`de file ${command.help.name}.js is geladen`);
};




client.once("ready", () => {
    console.log(`${client.user.username} is online.`);
    client.user.setActivity(`doe ${botConfig.prefix}help voor alle commando's te zien.`,{type: "PLAYING"});
});

client.on("messageCreate", message => {

    if(message.author.bot) return;
    
    

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];
    if(!message.content.startsWith(prefix)) return;

    const commandData = client.commands.get(command.slice(prefix.length));

    if(!commandData) return;

    var arguments = messageArray.slice(1);

    try{

        return commandData.run(client, message, arguments);

    } catch (error) {

        console.log(error);
        return message.channel.send("Er was een probleem tijdens het uitvoeren van deze command.");
        
    }

});

client.login(botConfig.token);