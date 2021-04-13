module.exports = {
    name: 'kick',
    description: 'kick osoby',
    execute(message, args, Discord, client) {

        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Nie masz uprawnień!")

        let member = message.mentions.users.first();
        if(member){
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send(`Użytkownik został wyrzucony z serwera.`);
        }else{
            message.channel.send('Nie oznaczyłeś osoby, którą chcesz wyrzucić z serwera!!');
        }
    }
}