async function aliveCommand(sock, chatId) {
    try {
        const message = `*🤖 Saurabh Bot is Active!*\n\n` +
                       `*Version:* 1.0.0\n` +
                       `*Status:* Online\n` +
                       `*Mode:* Public\n\n` +
                       `*🌟 Features:*\n` +
                       `• Group Management\n` +
                       `• Antilink Protection\n` +
                       `• Fun Commands\n` +
                       `• And more!\n\n` +
                       `Type *.menu* for full command list`;

        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363322419190456@newsletter',
                    newsletterName: 'Saurabh-bot',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' });
    }
}

module.exports = aliveCommand;