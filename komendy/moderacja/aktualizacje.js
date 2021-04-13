module.exports = {
    name: "aktualizacje",
    description: "zasugeruj coś!",
    execute(message, args, Discord) {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.reply("Nie masz uprawnień!")

        if(message.content.includes('@everyone') || message.content.includes('@here')) return;
        
        const channel = message.guild.channels.cache.get('829683978440015895');

        const suggestion = args.join(' ');
        if(!suggestion) return message.channel.reply('Nie podałeś informacji o aktualizacji!');

        const embed = new Discord.MessageEmbed()
        .setColor('#FF00FF')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .addFields({name:"Aktualizacja", value: `${suggestion}`})
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');

        channel.send(embed);
        }
    }
