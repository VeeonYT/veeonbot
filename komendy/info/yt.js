module.exports = {
    name: 'yt',
    aliases: ['yt'],
    description: 'Mój kanał na youtube',
    execute(message, args, Discord) {
        
        const channel = message.guild.channels.cache.get('829683978440015895');
        
        const embed = new Discord.MessageEmbed()
 
        .setColor('#00FF00')
        .setTitle('Mój kanał na youtube!')
        .setURL('https://www.youtube.com/channel/UC_qP98nMEP2uHoaZ5GWgT9As')
        .setDescription('Jak chcesz mnie zasubskrybować mój kanal, użyj **linku powyżej**!')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/KzKheD4.png');
 
        channel.send(embed);
    }
}