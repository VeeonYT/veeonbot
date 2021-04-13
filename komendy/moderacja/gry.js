module.exports = {
    name: 'gry',
    aliases: ['gry'],
    description: 'Wybierz gry!',
    execute(message, args, Discord) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")

        const channel = message.guild.channels.cache.get('829683978440015895');

        const embed = new Discord.MessageEmbed()
 
        .setColor('#00FF00')
        .setTitle('Wybierz gry!')
        .setDescription('**🧱 - GTA IV\n🎫 - GTAV\n🦺 - ETS2\n🎭 - Minecraft\n🎪 - World of Tanks\n🎍 - The Forest\n👓 - OSU\n🥽 - CS:GO\n🧥 - Fortnite\n🎄 - Assassins Creed I\n🎏 - Assassins Creed II\n🎐 - Assassins Creed III\n🎡 - Assassins Creed IV Black Flag\n👜 - Assassins Creed Origins\n🎩 - Assassins Creed Odyssey\n🎊 - Assassins Creed Valhalla\n⛳ - The Crew\n🚗 - The Crew 2\n🛹 - Watch Dogs\n🚲 - Watch Dogs 2**')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');
 
        channel.send(embed);
    }
}