module.exports = {
  name: "ticket",
  aliases: [],
  description: "open a ticket!",
  async execute(message, args, client, discord) {
    const channel = await message.guild.channels.create(`Ticket: ${message.author.tag}`);
    
    channel.setParent("828241427204276224");

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });

    const reactionMessage = await channel.send("Dziękujemy za skontaktowanie się z pomocą!");

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send("Błąd podczas wysyłania emotikonów!");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;
        case "⛔":
          channel.send("Usunięcie tego kanału w 2 sekund!");
          setTimeout(() => channel.delete(), 2000);
          break;
      }
    });

    message.channel
      .send(`Będziemy z Tobą! ${channel}`)
      .then((msg) => {
        setTimeout(() => msg.delete(), 10000);
        setTimeout(() => message.delete(), 7000);
      })
      .catch((err) => {
        throw err;
      });
  },
};
