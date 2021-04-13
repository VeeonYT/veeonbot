module.exports = {
    name: 'muzyka',
    description: 'Komendy do puszczania muzyki',
    execute(message, args, Discord) {
        const { commands } = message.client

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")

        const channel = message.guild.channels.cache.get('829683978440015895');

        const Embed = new Discord.MessageEmbed()
        .setColor('#008080')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('Komendy do puszczania muzyki')
        .addFields({ name: "Muzyka:", value: "!!play - **Puszczanie muzyki**\n!!skip - ** Skipowanie muzyki**\n!!stop - ** Zatrzymanie muzyki**" })
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');
 
        channel.send(Embed);
    }
}