const fs = require("fs");
const discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    if (message.channelId == "903372934641491992") {

        if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("sorry jij bent geen staf dus kan jij dit niet.");

        if (!args[0]) return message.reply("gelieve een gebruikersnaam te tagen.");

        if (!args[1]) return message.reply("gelieve een reden te geven.");

        var warnUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0].id));

        var reason = args.slice(1).join(" ");

        if (!warnUser) return message.reply("kan de gebruiker niet vinden");

        if (warnUser.permissions.has("MANAGE_MESSAGES")) return message.reply("sorry je kan deze persoon niet waarschuwen");

        const warns = JSON.parse(fs.readFileSync("./warnings.json", "UTF8"));

        if (!warns[warnUser.id]) warns[warnUser.id] = {
            warns: 0
        }

        warns[warnUser.id].warns++;

        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(`**Gewarnd:** ${warnUser.user.username} (${warnUser.id})
            **Warning door:** ${message.author}
            **Redenen: ** ${reason}`)
            .addField("Aantal warns", warns[warnUser.id].warns.toString())
            .setFooter("de maker van deze bot is thibaut aka flighguy", 'https://cdn.discordapp.com/attachments/889199259105251349/889200139623874620/image0.png');

        const channel = message.member.guild.channels.cache.get("903372934641491992");

        if (!channel) return;

        channel.send({ embeds: [embed] });
 

        if(warns[warnUser.id].warns == 3){

            var mes = new discord.MessageEmbed()
                .setDescription("PAS OP ", warnUser.user.username)
                .setColor("#ee0000")
                .addField("bericht", "nog 1 warn en je hebt een ban.");

            message.channel.send({ embeds: [mes] });
 
        }else if(warns[warnUser.id].warns == 4){

            message.guild.members.ban(warnUser, { reason: reason});
            message.channel.send(`${warnUser} is verbannen wegens te veel warns.`);

        }

        fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
            if (err) console.log(err);
        });

    } else {
        return message.channel.send("sorry hier is dit cmd niet toegestaan");
    }


}

module.exports.help = {
    name: "warn",
    category: "moderatie",
    description: "STAFF ONLY - geef een gebruiker een waarschuwwing als hij niet luistert let op na 4 warns krijg je automatisch een ban."
}