module.exports = {
    name: 'veeon',
    aliases: ['veeon'],
    description: 'Informacje o Veeonie!',
    execute(message, args, Discord) {
        const channel = message.guild.channels.cache.get('829683978440015895');

        const embed = new Discord.MessageEmbed()
        .setColor('#00FF00')
        .setTitle('Informacje o Veeonie!')
        .addFields({name: "Imię Veeona", value: "Sławek"})
        .addFields({name: "Data urodzenia:" , value: "25.11.2000"})
        .addFields({name: "Ile ma lat Veeon:", value: "20"})
        .addFields({name: "Skąd jest Veeon:", value: "Wielkopolskie"})
        .addFields({name: "Miasto:", value: "Piła"})
        .addFields({name: "Jakie gry Veeon gra:", value: "Far Cry 3\nFar Cry 4\nFar Cry 5\nFar Cry New Dawn\nETS2\nATS\nCSGO\nSleeping Dogs\nCar Mechanic Simulator 2018\nGrid 2\nGTA V\nGTA IV\nAmong Us\nMax Payne 3\nTomb Raider\nSaints Row The Third\nSaints Row IV\nSaints Row Gat Out Of Hell"})
        .setThumbnail('https://imgur.com/Ko02SFf.png')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/Ko02SFf.png');
 
        channel.send(embed);
    }
}