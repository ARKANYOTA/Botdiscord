const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.login('Le token');

client.on("guildMemberAdd", user =>{
    user.guild.channels.get("").send("Bienvenue à toi" + user +"dans le serveur "+ user.guild.name + "Si tu es un éléve de la merveilleuse classe 108 amuses toi bien dans ce serv sinon garde à toi")
    user.addRole("")
});

client.on("guildMemberRemove", user =>{
    user.guild.channels.get("").send("*Ahlalala*" + user.user.username + "** est parti")
});
