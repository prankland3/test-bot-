const botConfig = require("../botConfig.json");
const discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    if(message.channelId == "903372934641491992" || message.channelId == "903375578491658261"){
    
        try {
             
            var prefix = botConfig.prefix;


            var response = "**bot commands**\r\n\n";
            var info = "**__informatie__**\n";
            var help = "**__help commands__**\n";
            var moderatie = "**__moderatie (STAFF ONLY!!)__**\n";
            var helpCmd ;
            var infoCmd ;
            var moderatieCmd;
                client.commands.forEach(command => {

                    
                    switch (command.help.category) {
                        case "help":
                            helpCmd += `${prefix}${command.help.name} - ${command.help.description}\n\r`;
                            break;
                        case "info":
                            infoCmd +=`${prefix}${command.help.name} - ${command.help.description}\n\r`;
                            break;
                        case "moderatie":
                            moderatieCmd += `${prefix}${command.help.name} - ${command.help.description}\n\r`;
                            break;
                    }
                    
                    
                });
                    

                var botEmbed =  new discord.MessageEmbed()
                        .setTitle(response)
                        .setDescription("alle help commando's.")
                        .setColor("#00f2ff")
                        .addFields(
                            {name: help, value: helpCmd},
                            {name: info, value: infoCmd},
                            {name: moderatie, value: moderatieCmd},
                        )
                        .setTimestamp()
                        .setFooter("de maker van deze bot is thibaut aka flighguy");
                

                message.author.send({embeds: [botEmbed]}).then(()=> {

                    return message.reply("al je berichten staan in je dm")

                }).catch(()=>{

                    message.reply("je prive berichten staan uit sorry daardoor lukt het me niet om de help commando door te sturen zet je dm aan of vraag aan een vriend die wel dm's aan staan heeft of hij de command wil uivoeren ;)")

                })
        } catch (error){ 
            message.reply("er is iets misgelopen.");
            console.log(error);
        }
        
    }else{
        return message.channel.send("sorry hier is dit cmd niet toegestaan");
    }
    
    
}

module.exports.help ={
    name: "help",
    category: "help",
    description: "heeft alle commando's weer."
}