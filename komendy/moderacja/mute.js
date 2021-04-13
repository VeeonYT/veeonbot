const ms = require('ms');

module.exports = {
    name: 'mute',
    description: "To wycisza członka",
    execute(message, args) {
        const channel = message.guild.channels.cache.get('829318187455610890');
        const target = message.mentions.users.first();

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")

        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Użytkownik');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Wyciszony');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                channel.send(`<@${memberTarget.user.id}> zostałeś/aś wyciszony/a`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
           channel.send(`<@${memberTarget.user.id}> zostałeś/aś wyciszony/a na ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            channel.send('Nie mogę znaleźć tego członka!');
        }
    }
}
