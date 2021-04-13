module.exports = {
    name: 'botmusic',
    aliases: ['botmusic'],
    description: 'Informacje o bocie music!',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
 
        .setColor('#000080')
        .setTitle('Informacje o bocie!')
        .addFields({name: "Nazwa bota:", value: "VeeonBot - Music#4919"})
        .addFields({name: "Data stworzenia:", value: "02.04.2021"})
        .addFields({name: "Godzina stworzenia:" , value: "14:30"})
        .addFields({name: "Założyciel bota:", value: "VeeonPlus"})
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/Ko02SFf.png');
 
        message.channel.send(newEmbed);
    }
}