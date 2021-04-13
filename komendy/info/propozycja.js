module.exports = {
    name: "p",
    description: "zasugeruj coś!",
    execute(message, args, Discord) {

        if(message.content.includes('@everyone') || message.content.includes('@here')) return;
        
        const channel = message.guild.channels.cache.get('829683978440015895');

        const suggestion = args.join(' ');
        if(!suggestion) return message.channel.send('Nie podałeś propozycji!');

        const embed = new Discord.MessageEmbed()
        .setColor('#FF1493')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`${suggestion}`)
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/Ko02SFf.png');

        channel.send(embed).then(m =>{
            m.react('✅');
            m.react('❎');
        })
    }
}