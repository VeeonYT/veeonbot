module.exports = {
    name: 'grupa',
    aliases: ['grupa'],
    description: 'Moja grupa na fb!',
    execute(message, args, Discord) {
         
        const channel = message.guild.channels.cache.get('829683978440015895');
        
        const embed = new Discord.MessageEmbed()
        .setColor('#000080')
        .setTitle('Moja grupa na fb!')
        .setURL('https://www.facebook.com/groups/2399644453583018/')
        .setDescription('Wejdz na moją grupę na fb, użyj **linku powyżej**!')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/Ko02SFf.png');
 
        channel.send(embed);
    }
}