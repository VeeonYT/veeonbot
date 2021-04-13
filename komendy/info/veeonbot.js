module.exports = {
    name: 'veeonbot',
    aliases: ['infobot'],
    description: 'Informacje o bocie!',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
 
        .setColor('#000080')
        .setTitle('Informacje o bocie!')
        .addFields({name: "Nazwa bota:", value: "VeeonBot - Ogólny#3023"})
        .addFields({name: "Data stworzenia:", value: "30.03.2021"})
        .addFields({name: "Godzina stworzenia:" , value: "13:10"})
        .addFields({name: "Założyciel bota:", value: "VeeonPlus"})
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/b4Dm9Rd.png');
 
        message.channel.send(newEmbed);
    }
}