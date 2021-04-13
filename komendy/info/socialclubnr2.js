module.exports = {
    name: 'socialclubnr2',
    aliases: ['socialclubnr2'],
    description: 'Moje konta na rocksta gamem social club',
    execute(message, args, Discord) {
         
        const channel = message.guild.channels.cache.get('829683978440015895');
        
        const embed = new Discord.MessageEmbed()
 
        .setColor('#FFFF00')
        .setTitle('Moje konto drugie na rockstar games social club!')
        .setURL('https://socialclub.rockstargames.com/member/DiabloPolska/')
        .setDescription('Jak chcesz mnie dodać do socialclub, użyj **linku powyżej**!')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/Ko02SFf.png');
 
        channel.send(embed);
    }
}