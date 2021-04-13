module.exports = {
    name: 'fb',
    aliases: ['facebook'],
    description: 'Moja strona na fb!',
    execute(message, args, Discord) {
 
        const channel = message.guild.channels.cache.get('829683978440015895');
        
        const embed = new Discord.MessageEmbed()
 
        .setColor('#800000')
        .setTitle('Moja strona na fb!')
        .setURL('https://www.facebook.com/veeonplus')
        .setDescription('Wejdz na moją stronę na fb, użyj **linku powyżej**!')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/Ko02SFf.png');
 
        channel.send(embed);
    }
}