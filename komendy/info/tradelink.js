module.exports = {
    name: 'tradelink',
    aliases: ['tradelink'],
    description: 'Mój link do tradelink!',
    execute(message, args, Discord) {
         
        const channel = message.guild.channels.cache.get('829683978440015895');
        
        const embed = new Discord.MessageEmbed()
        .setColor('#FF00FF')
        .setTitle('Mój link do tradelink!')
        .setURL('https://steamcommunity.com/tradeoffer/new/?partner=1023046718&token=Dpcm60TZ')
        .setDescription('Jak chcesz ze mną z trejdować, użyj **linku powyżej**!')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/Ko02SFf.png');
 
       channel.send(embed);
    }
}