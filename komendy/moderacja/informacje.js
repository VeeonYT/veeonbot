module.exports = {
    name: "informacje",
    description: "zasugeruj coś!",
    execute(message, args, Discord) {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")

        if(message.content.includes('@everyone') || message.content.includes('@here')) return;
        
        const channel = message.guild.channels.cache.get('829683978440015895');

        const suggestion = args.join(' ');
        if(!suggestion) return message.channel.send('Nie podałeś informacje!');

        const embed = new Discord.MessageEmbed()
        .setColor('#4B0082')
        .addFields({name:"Informacje", value: `${suggestion}`})
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');

        channel.send(embed);
        }
    }
