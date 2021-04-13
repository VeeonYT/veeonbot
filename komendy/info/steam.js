module.exports = {
    name: 'steam',
    aliases: ['steam'],
    description: 'Moje konto na steam!',
    execute(message, args, Discord) {
        
        const channel = message.guild.channels.cache.get('829683978440015895');
        
        const embed = new Discord.MessageEmbed()
        .setColor('#FF00FF')
        .setTitle('Moje konto na steam!')
        .setURL('https://steamcommunity.com/id/veeonplus/')
        .setDescription('Jak chcesz mnie dodać do znajomych na steam, użyj **linku powyżej**!')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/Ko02SFf.png');
        
        channel.send(embed);
    }
}