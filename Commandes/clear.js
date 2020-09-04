const Discord = require('discord.js');

module.exports.run= async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))return message.channel.send("Tu n'as pas les perms batard ! Reagardez bien" + message.author + "qui n'a pas les perms mais essaie de grâter quand même").catch(console.error)
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Le bot n'a pas les perms, batard !").catch(console.error)
    if(!args[0]) return message.channel.send("Spécifies un nombre de message a supprimer batard !");
    if(isNaN(args[0])) return message.channel.send("Spécifies un nombre au leu de mettre des lettres comme un débile !")
    message.channel.bulkDelete(args[0]);
    message.channel.send(`${args[0]} messages ont bien été supprimés !`)
};

module.exports.help = {
    name: "clear"
};