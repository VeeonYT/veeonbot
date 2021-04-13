module.exports = {
    name: 'ig',
    aliases: ['ig'],
    description: 'Mój instagram!',
    execute(message, args, Discord) {
 
        const channel = message.guild.channels.cache.get('829683978440015895');
        
        const embed = new Discord.MessageEmbed()
        .setColor('#800080')
        .setTitle('Mój instagram!')
        .setURL('https://www.instagram.com/slawek.25.11/')
        .setDescription('Jak chcesz mnie zaobserwować na instagramie, użyj **linku powyżej**!')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/Ko02SFf.png');
 
        channel.send(embed);
    }
}