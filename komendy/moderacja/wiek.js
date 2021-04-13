module.exports = {
    name: 'wiek',
    aliases: ['wiek'],
    description: 'Wybierz wiek!',
    execute(message, args, Discord) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")

        const channel = message.guild.channels.cache.get('829683978440015895');

        const embed = new Discord.MessageEmbed()
 
        .setColor('#00FF00')
        .setTitle('Wybierz wiek!')
        .setDescription('**🧬- 12+\n👕 - 14+\n🎁 - 16+\n🎃 - 18+\n🎯 - 20+\n💎- 25+\n💍 - 30+**')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');
 
        channel.send(embed);
    }
}