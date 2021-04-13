module.exports = {
    name: 'komendy',
    description: 'Lista komend',
    execute(message, args, Discord) {
        const { commands } = message.client

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")

        const channel = message.guild.channels.cache.get('829683978440015895');

        const Embed = new Discord.MessageEmbed()
        .setColor('#008080')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('Wszystkie komendy')
        .addFields({ name: "Administracja:", value: "!!ban - **Ta komenda służy do banowania.**\n!!kick - **Ta komenda służy do kickowania**\n!!aktualizacje - **Administracja aktualizuje bota na bieżąco.**\n!!ogł - **Administracja ogłasza nową informacje.**\n!!clear - **Ta komenda służy do czyszcznienia chatu.**\n!!ankieta - **Administracja robi ankiete.**\n!!rekrutacja - ** Administracja robi rekrutacje na moderatora.**\n!!informacje - **Administracja informuje nasz o urlopie czy nieobecność.**\n!!administracja - **Sprawdz kto jest z administracjii**\n!!komendy - **Ta komenda jest tylko wyłącznie dla administracjii**\n!!muzyka - **Sprawdzanie jakie są komendy do puszczania muzyki.**" })
        .addFields({ name: "Dla wszystkich:", value: "!!p - ** Ta komenda służy dawania propozycji.**\n!!ping - ** Ta komenda służy do sprawdzania pingu i api bota.**\n!!donate - **Ta komenda służy zeby dać donate.**\n!!administracja. - **Ta komenda służy do sprawdzanie kto jest administratorem.**\n!!snapchat - **Ta komenda służy dodanie mnie na snapie.**\n!!socialclubnr1 - **Moje konto pierwsze na socialclub.**\n!!socialclubnr2 - **Moje drugie konto socialclub.**\n!!steam - **Mój profil steam.**\n!!tradelink - ** Mój tradelink. **\n!!twitch - ** Mój kanał na twitchu. **\n!!yt - ** Mój kanał na yt.**\n!!grupa - ** Moja grupam na fb.**\n!!facebook - ** Moja strona na fb.**\n!!infobot - **Informacje o bocie kto stworzył tego bota.**\n!!veeon - **Informacje o Veeonie**\n!!userinfo - **Sprawdzasz sobie kiedy dołączyłeś na serwer discord**\n!!ticket - **Ta komenda jest do pomocy, jeżeli masz jakiś problem to pisujesz tą komendę, a jak nie potrzebujesz pomocy od administracjii, a jak wpiszesz bezsensu tą komendę to zostaniesz ukarany warnem.\nMożna tej komendy używać co 2 godziny.**"})
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');
 
        channel.send(Embed)
    }
}