const discord = require("discord.js");
 
module.exports.run= async(client, message, args) => {
 
    var item = "";
    var time;
    var winnerCount;
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Désolé mais tu n'as pas les permissions necéssaires pour effectuer cette commande");
 
    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(' ');
 
    message.delete();
 
    var date = new Date().getTime();
    var dateTime = new Date(date + (time * 1000));

    var giveawayEmbed = new discord.RichEmbed()
        .setDescription(':tada:「**Nouveau Concours**」:tada:')
        .addField('Nombre de gagnant:', `${winnerCount} Gagnant(s)`)
        .addField('Récompense:', `${item}`)
        .addField('Finis le', `${dateTime}`)
        .addField('Réagissez avec :tada: pour participer !', `Giveaway par ${message.author.username}`)
 

    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");
 
    setTimeout(function () {
 
        var random = 0;
        var winners = [];
        var inList = false;
 
        var peopleReacted = embedSend.reactions.get("🎉").users.array();
 
        for (var i = 0; i < peopleReacted.length; i++) {
            if (peopleReacted[i].id == client.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }
        }
 
        if (peopleReacted.length == 0) {
            return message.channel.send("Il n'y a pas de gagnant : Le bot a donc gagné !");
        }
 
        if (peopleReacted.length < winnerCount) {
            return message.channel.send("Il n'y a pas assez de participants : le Bot a donc gagné !.");
        }
 
        for (var i = 0; i < winnerCount; i++) {
 
            inList = false;
 
            random = Math.floor(Math.random() * peopleReacted.length);
 
            for (var y = 0; y < winners.length; y++) {
                if (winners[y] == peopleReacted[random]) {
                    i--;
                    inList = true;
                    break;
                }
            }
 
            if (!inList) {
                winners.push(peopleReacted[random]);
            }
 
        }
 
        for (var i = 0; i < winners.length; i++) {
            message.channel.send("Bravo a vous :" + winners[i] + `Ils gagnent chacun un **${item}**.`);            
        }
 
    }, 1000 * time);
 
 
}
 
module.exports.help = {
    name: "giveaway",
}