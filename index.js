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

client.login('NjYxNTI5MDk0MzkxMDcwNzgy.Xgs02Q.ksU9W1-E3FLTl6_K1yhZ8bPM19M');

client.on("guildMemberAdd", user =>{
    user.guild.channels.get("662063638332571660").send("Bienvenue à toi" + user +"dans le serveur "+ user.guild.name + "SI tu es un éléve de la merveilleuse classe 108 amuses toi bien dans ce serv sinon garde à toi")
    user.addRole("661595102485020683")
});

client.on("guildMemberRemove", user =>{
    user.guild.channels.get("662063740732178452").send("**" + user.user.username + "** se révelait être un facho-capitaliste adorateur de perquisition à la botte de Trump...tout ce que Mélenchon déteste ,malheureusement pour lui. Il a donc été envoyé au Goulag.")
});
