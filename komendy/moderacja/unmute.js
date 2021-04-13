module.exports = {
    name: 'unmute',
    description: "To wyłącza wyciszenie członka",
    execute(message, args){
        const channel = message.guild.channels.cache.get('829318187455610890');
        const target = message.mentions.users.first();

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")
        
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Użytkownik');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Wyciszony');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            channel.send(`<@${memberTarget.user.id}> został/a wyciszony/a`);
        } else{
            channel.send('Nie mogę znaleźć tego członka!');
        }
    }
}