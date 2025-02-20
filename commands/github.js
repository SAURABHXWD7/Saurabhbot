async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 Saurabh-bot*

*📂 GitHub Repository:*
https://github.com/SAURABHXWD7/Saurabhbot

*📢 Official Channel:*
https://youtube.com/@mr_saurabh_thakur

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'Saurabh-bot',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 