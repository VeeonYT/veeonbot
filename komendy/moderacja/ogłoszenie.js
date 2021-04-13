module.exports = {
    name: "ogł",
    description: "zasugeruj coś!",
    execute(message, args, Discord) {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")

        if(message.content.includes('@everyone') || message.content.includes('@here')) return;
        
        const channel = message.guild.channels.cache.get('829683978440015895');

        const suggestion = args.join(' ');
        if(!suggestion) return message.channel.send('Nie podałeś ogłoszenia!');

        const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .addFields({name:"Ogłoszenie", value: `${suggestion}`})
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');

        channel.send(embed);
        }
    }
