module.exports = {
    name: "rekrutacja",
    description: "Rekrutacja o moda!",
    execute(message, args, Discord) {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")
        
        if(message.content.includes('@everyone') || message.content.includes('@here')) return;
        
        const channel = message.guild.channels.cache.get('829683978440015895');

        const suggestion = args.join(' ');
        if(!suggestion) return message.channel.send('Nie podałeś informacji rekrutacjii!');

        const embed = new Discord.MessageEmbed()
        .setColor('#FF00FF')
        .addFields({name:"Rekrutacja na moderatora", value: `${suggestion}`})
        .setThumbnail('https://imgur.com/cUJHz2G.png')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');
        
        channel.send(embed);
        }
    }
