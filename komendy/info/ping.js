const chalk = require("chalk")

module.exports = {
    name: 'ping',
    description: 'Ping Pong!',
    execute(message, args, client) {
        message.channel.send("Obliczanie pingu...").then(messageResult =>{
            const ping = messageResult.createdTimestamp - message.createdTimestamp
            messageResult.edit(`Ping bota wynosi **${ping}**, a opóźnienie Discordowego API wynosi **${client.ws.ping}**`)
        })

        console.log(chalk.magentaBright("Użyto komendy ping"));
    }
}