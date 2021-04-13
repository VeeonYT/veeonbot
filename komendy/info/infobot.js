module.exports = {
    name: 'bot',
    aliases: ['infobot'],
    description: 'Informacje o bocie!',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
 
        .setColor('#000080')
        .setTitle('Informacje o bocie!')
        .addFields({name: "Nazwa bota:", value: "VeeonBot#3023"})
        .addFields({name: "Data stworzenia:", value: "30.03.2021"})
        .addFields({name: "Godzina stworzenia:" , value: "13:10"})
        .addFields({name: "Założyciel bota:", value: "VeeonPlus"})
        .setThumbnail('https://imgur.com/1vF3bQE.png')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');
 
        message.channel.send(newEmbed);
    }
}