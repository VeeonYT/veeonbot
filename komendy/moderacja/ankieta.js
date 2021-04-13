module.exports = {
    name: 'ankieta',
    aliases: ['poll', 'stworzankiete'],
    description: 'Zrobić ankietę!',
    async execute(message, args, Discord) {
        let Arguments = args.join(' ');
 
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")
        
        const channel = message.guild.channels.cache.get('829683978440015895');
        
        let embed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('Ankieta')
        .setDescription('Użyj rekacji, aby zagłosować...')
        .addFields({name:"Głosowanie" ,value:`${Arguments}`})
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');
 
        let messageEmbed = await channel.send(embed);
 
        messageEmbed.react('✅');
        messageEmbed.react('❎');
    }
}