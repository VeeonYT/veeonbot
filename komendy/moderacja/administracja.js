module.exports = {
    name: 'administracja',
    description: 'Lista adminów na discordzie',
    execute(message, args, Discord) {
        const { commands } = message.client

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")
        
        const channel = message.guild.channels.cache.get('829683978440015895');
        
        const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Administracja Ekipy Veeona:')
        .addFields({ name: "Właściciel:", value: 'VeeonPlus' })
        .addFields({ name: "Właścicielka:", value: "Brak"})
        .addFields({ name: "Developer:", value: "Brak"})
        .addFields({ name: "Administrator:", value: "smacznej kawusi"})
        .addFields({ name: "Moderator:", value: "Brak"})
        .addFields({ name: "Pomocnik:", value: "Brak"})
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');
 
        channel.send(embed);
    }
}