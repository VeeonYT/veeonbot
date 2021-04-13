module.exports = {
    name: 'regulamin',
    aliases: ['regulamin'],
    description: 'Regulamin serwera Ekipa Veeona!',
    execute(message, args, Discord) {


        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnień!")

        const channel = message.guild.channels.cache.get('829683978440015895');

        const embed = new Discord.MessageEmbed()
        
        .setColor('#00FF00')
        .setTitle('Regulamin serwera discord Ekipa Veeona')
        .setDescription('§1 Akceptacja regulaminu odbywa się poprzez dołączenie na nasz serwer Discord.\n§2 Zakazuje się wklejania linków referencyjnych, typu: "zapraszasz - zarabiasz" etc.\n§3 Zakazuje się wklejania zaproszeń na inne serwery Discord.\n§4 Zakazuje się reklamowania innych serwerów Discordów.\n§5 Zakazuje się zaśmiecania serwera Discord poprzez spamowanie.\n§6 Zakazuje się obrażania wszechobecnych członków na serwerze Discord.\n§7 Nazwa użytkownika nie może być wulgarna, ani obraźliwa.\n§8 Osoba zbanowana ma możliwości apelowania od kary po upływie 14 dni u właściciela VeeonPlus#4057.\n§10 Zakazuje się promowania/reklamowanie stron bez zgody administracji.\n§11 Zabrania się udostępniania cudzych zdjęć/danych bez ich zgody.\n§12 Zabrania się nadużywania przekleństw na serwerze, oczywiście, można co jakiś czas użyć wulgaryzmu, ale bez wiązanek.\n§13 Zabrania się jakichkolwiek prowokacji innych członków serwera Discord.\n§14 Zakaz wrzucania screenów z rozmów prywatnych bez zgody drugiej osoby lub mogących skrzywdzić bądź ośmieszyć drugą osobę.\n§15 Zakaz podszywania się pod moderację i administrację serwera Discord\n§16 Od WARNA można apelować po 3 dniach. Na kanale #〚💨〛tickety\n§17 Zakaz umieszczania treści pornograficznych, drastycznych na kanałach publicznych.\n§18 Wszelkie kłótnie bądź spiny wyjaśniamy poza Discordem serwerowym!!\n§19 Nieznajomość regulaminu nie zwalnia z jego przestrzegania\n§20 Dodawanie do nicku znaków specjalnych np. !VeeonPlus będą usuwane.\n§21 Nie kopiować tekstu czy informacje z bota który został pisany przez właściciela Discorda VeeonPlus#4057\n§22 Nie używać tak często komendy !!userinfo, bo inaczej zostanie zablokowana dla użytkowników.')
        .addFields({name: "Taryfikator:", value:"Warn/ban Jeżeli złamiesz jakiś punkt regulamin lub jeśli administrator zdecyduje, że na niego zaslugujesz.\n❌ 1 WARN = Ostrzeżenie przed banem\n❌ 2 WARN = Ostrzeżenie przed banem\n❌ 3 WARN = Ostrzeżenie przed banem\n❌ 4 WARN = BAN"})
        .addFields({name: "Zaakceptowanie regualminu" , value: "Po przeczytaniu regulaminu. Kilknij w odpowiednią reakcje\n👨 - Widz\n👩 - Widzka"})
        .setThumbnail('https://imgur.com/cUJHz2G.png')
        .setFooter('🔒2021 © Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');
        
        channel.send(embed);
    }
}