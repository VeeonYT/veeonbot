module.exports = {
    name: 'snapchat',
    aliases: ['snapchat'],
    description: 'Mój snapchat!',
    execute(message, args, Discord) {
         
        const channel = message.guild.channels.cache.get('829683978440015895');
        
        const embed = new Discord.MessageEmbed()
 
        .setColor('#FFD700')
        .setTitle('Możesz mnie dodać, oczywiście jak chcesz!')
        .setDescription('Mój snapchat: **veeonofficial4**!')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/Ko02SFf.png');
 
        channel.send(embed);
    }
}