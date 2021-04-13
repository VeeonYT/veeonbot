module.exports = {
    name: 'donate',
    aliases: ['donate'],
    description: 'Wesprzyj Veeona pieniążkiem!',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
 
        .setColor('#00FF00')
        .setTitle('Wyślij mi donate!')
        .setURL('https://tipply.pl/u/veeonplus')
        .setDescription('Jak chcesz wysłać doante klikij **linku powyżej**!')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/Ko02SFf.png');
 
        message.channel.send(newEmbed);
    }
}