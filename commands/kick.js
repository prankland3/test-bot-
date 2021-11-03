const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(message.channelId == "903372934641491992"){

        //if the member is a moderator or not

        
       
        
    }else{
        return message.channel.send("sorry hier is dit cmd niet toegestaan");
    }
    
    
}

module.exports.help ={
    name: "kick",
    category: "moderatie",
    description: "STAFF ONLY - kick de persoon als hij niet wilt luisteren en het niet zo heel erg is."
}