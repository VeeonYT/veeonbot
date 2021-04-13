module.exports = {
    name: 'twitch',
    aliases: ['twitch'],
    description: 'Mój kanał na twitchu',
    execute(message, args, Discord) {
        
        const channel = message.guild.channels.cache.get('829683978440015895');
        
        const embed = new Discord.MessageEmbed()
        .setColor('#800080')
        .setTitle('Mój kanał na twitchu!')
        .setURL('https://www.twitch.tv/veeonplus')
        .setDescription('Jak chcesz mnie zaobserwować na twitchu, użyj **linku powyżej**!')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/Ko02SFf.png');
        
        channel.send(embed);
    }
}