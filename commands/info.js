const discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    if(message.channelId == "903372934641491992"){ 
        
    
    return message.channel.send("sorry hier is dit cmd niet toegestaan");
    }else{
        var botEmbed =  new discord.MessageEmbed()
    .setTitle("bot informatie")
    .setDescription("heeft de informatie weer.")
    .setColor("#0099ff")
    .addField("bot naam", client.user.username)
    .setThumbnail("https://cdn.discordapp.com/attachments/889199259105251349/889200139623874620/image0.png")
    .setTimestamp()
    .setFooter("de maker van deze bot is thibaut aka flighguy", 'https://cdn.discordapp.com/attachments/889199259105251349/889200139623874620/image0.png');

    return message.channel.send({embeds: [botEmbed]});
    }
}

module.exports.help ={
    name: "info",
    category: "info",
    description: "heeft de info weer"
}