module.exports.run = async (client, message, args) => {
    if(message.channelId == "903372934641491992"){
        return message.channel.send("hallo");
        
    }else{

        //if the channel isnt alowed to use the command
        return message.channel.send("sorry hier is dit cmd niet toegestaan");
    }
    
    
}

module.exports.help ={
    name: "hallo"
}