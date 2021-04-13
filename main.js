const Discord = require('discord.js');
const nodemon = require('nodemon');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const { token, prefix } = require('./config.js');
const chalk = require('chalk');
const fs = require('fs');

client.commands = new Discord.Collection();

['command.handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client,Discord)
})

const commandFiles = fs.readdirSync('./komendy/').filter(file => file.endsWith('.js'));

client.once('ready', () => {
     console.log(chalk.blueBright(`Aplikacja o tagu ${client.user.tag} połączył się z Discordem.`));
     client.user.setPresence({ activity: { name: 'BETA v2.0' }, status: 'dnd' });
});

for (const file of commandFiles) {
   const command = require(`./komendy/${file}`);
   client.commands.set(command.name, command);
}

client.on('message', message =>{
   if (!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).trim().split(/ +/);
   const command = args.shift().toLowerCase();

   if (command === 'ping') {
       client.commands.get('ping').execute(message, args, client, chalk);
   } else if (command === 'komendy') {
       client.commands.get('komendy').execute(message,args, Discord);
   } else if (command === 'ankieta') {
       client.commands.get('ankieta').execute(message, args, Discord);
   } else if (command === 'ban') {
       client.commands.get('ban').execute(message, args, Discord);
   } else if (command === 'kick') {
       client.commands.get('kick').execute(message, args, Discord);
   } else if (command === 'clear') {
       client.commands.get('clear').execute(message, args, Discord);
   } else if (command === 'p') {
       client.commands.get('p').execute(message, args, Discord);
   } else if (command === 'aktualizacje') {
       client.commands.get('aktualizacje').execute(message, args, Discord);
   } else if (command === 'ogł') {
       client.commands.get('ogł').execute(message, args, Discord);
   } else if (command === 'administracja') {
       client.commands.get('administracja').execute(message, args, Discord);
   } else if (command === 'donate') {
       client.commands.get('donate').execute(message, args, Discord);
   } else if (command === 'snapchat') {
       client.commands.get('snapchat').execute(message, args, Discord);
   } else if (command === 'socialclubnr1') {
       client.commands.get('socialclubnr1').execute(message, args, Discord);
   } else if (command === 'socialclubnr2') {
       client.commands.get('socialclubnr2').execute(message, args, Discord);
   } else if (command === 'twitch') {
       client.commands.get('twitch').execute(message, args, Discord);
   } else if (command === 'yt') {
       client.commands.get('yt').execute(message, args, Discord);
   } else if (command === 'ig') {
       client.commands.get('ig').execute(message, args, Discord);
   } else if (command === 'steam') {
       client.commands.get('steam').execute(message, args, Discord);
   } else if (command === 'tradelink') {
       client.commands.get('tradelink').execute(message, args, Discord);
   } else if (command === 'grupa') {
       client.commands.get('grupa').execute(message, args, Discord);
   } else if (command === 'fb') {
       client.commands.get('fb').execute(message, args, Discord);
   } else if (command === 'rekrutacja') {
       client.commands.get('rekrutacja').execute(message, args, Discord);
   } else if (command === 'infobot') {
       client.commands.get('infobot').execute(message, args, Discord);
   } else if (command === 'veeon') {
       client.commands.get('veeon').execute(message, args, Discord);
   } else if (command === 'informacje') {
       client.commands.get('informacje').execute(message, args, Discord);
   } else if (command === 'gry') {
       client.commands.get('gry').execute(message, args, Discord);
   } else if (command === 'wiek') {
       client.commands.get('wiek').execute(message, args, Discord);
   } else if (command === 'urzadzenia') {
       client.commands.get('urzadzenia').execute(message, args, Discord);
   } else if (command === 'plec') {
       client.commands.get('plec').execute(message, args, Discord);
   } else if (command === 'regulamin') {
       client.commands.get('regulamin').execute(message, args, Discord);
   } else if (command === 'userinfo') {
       client.commands.get('userinfo').execute(message, args, Discord, client);
   } else if (command === 'ticket') {
       client.commands.get('ticket').execute(message, args, client, Discord);
   } else if (command === 'muzyka') {
       client.commands.get('muzyka').execute(message, args, Discord);
   } else if (command === 'report') {
       client.commands.get('report').execute(client, message, args, Discord);
   } else if (command === 'mute') {
       client.commands.get('mute').execute(message, args);
   } else if (command === 'unmute') {
       client.commands.get('unmute').execute(message, args);
   }


});


client.login(token);