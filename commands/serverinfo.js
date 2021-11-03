const discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    if(message.channelId == "903372934641491992") {
        var botEmbed =  new discord.MessageEmbed()
    .setTitle("server informatie")
    .setDescription("heeft aan wnr je gejoint bent en hoeveel leden er zijn")
    .setColor("#0099ff")
    .addFields(
        {name: "Bot naam", value: client.user.username},
        {name: "je bent de server gejoind op ", value: message.member.joinedAt.toString() },
        {name: "totaal members", value: message.guild.memberCount.toString() },
    )
    .setThumbnail("https://cdn.discordapp.com/attachments/889199259105251349/889200139623874620/image0.png")
    .setTimestamp()
    .setFooter("de maker van deze bot is thibaut aka flighguy", 'https://cdn.discordapp.com/attachments/889199259105251349/889200139623874620/image0.png');

    return message.channel.send({embeds: [botEmbed]});
    }else{
    
    return message.channel.send("sorry hier is dit cmd niet toegestaan");
    }
}

module.exports.help ={
    name: "serverinfo"
}