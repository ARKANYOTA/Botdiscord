const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
     
    const membre = message.author;

    message.channel.send({
        embed: {
            color: 0xa31111,
            title: `Test`,
            fields: [
                {
                name: "> Test",
                value : "La commande Help est encore en dévellopement"
                }
            ],
            footer: {
                text: `Test`
            }
        }
    })
 
};

module.exports.help = {
    name: "help"
}
