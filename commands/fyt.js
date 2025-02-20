const fyt = [
    "<3 T3R1 B4J1 K1 (+) M3 M41 SUN3HR1 _!!_ D44L K3 T3R1 B44J11 K1 (+) K0 K4L4P4 DUNG4 :D",
    "<3 T3R1 B3H3N K1 B00R K0 M41 41S4 CH0UDUNG4 K1 T3R1 B3H3N K1 B00R F4TT J44Y3G1 L0WD3 K3 B44L :P =]] ;P",
    "<3 B3H3N CH0UD K3 B4CCH3W T3R1 B3H3N K1 (+) K0 M41 M44R M44R K3 SUL4 DUNG4 B3H3N CH0UD K3 B4CCH3W :D :P =D :-) <3 =)) :|] O.o",
    "<3 T3R1 B3H3N K1 (+) K0 M41 CH33R DUNG4 L0WD3 K3 B44L T3R1 B3H3N K1 (+) M3 M41 LUN DUNG4 =] :D =D :-) <3 =)) :|] O.o",
    "<3 T3R1 M44 K1 (+) K3 S4BS3 B4D3 B44L K4 S1Z3 B4T4 :/ :v ;P (^^^) :) <(") <3",
    "<3 SUN4 H41 T3R1 M44 H4RP1C P0W3R US3 K4RT1 H41 1S 1Y3 USK1 (+) T3R1 B3H3N K1 (+) S3 P44NCH_GUN44H JY4D4 B3HT4R S44F H41 :P :D S4H1 SUN4 H41 KY4 :P :v :P",
    "<3 T3R1 M44 K1 (+) M41 N4M4K H41 KY4? ;P (^^^) :) <(") <3",
    "<3 SUN4 H41 T3R1 M44 1 JUNGL3 M41 G4Y3 TH1 W4H4 W0 BH4T4K G4Y3 TH1 4UR K1S1 P0W3RFUL J4NW4R N3 USK1 G44ND M41 J0R S3 P4NJ4 M44R4 TH4 S4H1 SUN4 H41 KY4 :P :v :v :P",
    "<3 J44 4PN1 B44J1 K1 (+) K3 B44L D3KH CH0T3 H0W3 H41N K3 N4H1 :v :P ;) :/ <3 🅾️<3 T3R1 M44 K3 N1PPL3 P4R J0 S4BS3 CHH0R4 B44L H41 USK4 S1Z3 B4T4 :v :P",
    "<3 T3R1 M44 K1 (+) M41 44J M41 N3 S0D4 K1 B0TTLY H1L4 H1L4 K3 KH0L K3 GHUSS44Y3 TH1 J44 K3 D3KH KUCH S0D4 B4CH1 H41 W4H4 T0H P33 L3 N4H1 T0H W4H1 R3HN3 D3 :D :P :v",
    "<3 T3R1 B3H3N K3 D0N0 CH0CH3 K3 B33CH 1 D44N4 H41 USS D44N3 K4 S1Z3 B4T4 :v :P ;P (^^^) :) <(") <3",
    "<3 SUN4 H41 T3R1 M44 K4 1 CH0CH4 F4T4 HU4 H41 S4H1 SUN4 H41 KY4 J4LD1 B4T4 B4KCH0UD1Y44 M4T K4R :P :3 =D :-) <3 =)) :|] O.o",
    "<3 T3R1 B3H3N K1 (+) M41 H4M N3 44J B4HUT TUF4N11 M4CH44Y3 J44 K3 D3KH K3 44 K011 N1SH44N H41 K3 N4H1 J4LD1 :P :D ;P (^^^) :) <(") <3",
    "<3 4CH4 SUN 4PN1 B3H3N K3 B00BS K4 M33TH4 M33TH4 R4S M4L41 W44L4 D00DH T0H P1L4 D3 MUJH3 =D :-) <3 =)) :|] O.o",
    "<3 D4RU K1 B0TTL3 R3H G4Y1 H4Y T3R1 B44J1 K1 (+) M41 J44 L3 K3 44 =D :-) <3 =)) :|] O.o",
    "<3 SUN4 H4Y T0U SU4R K4 D00DH P33T4 H41 S4CH SUN4 H41 KY4?  ;P (^^^) :) <(") <3",
    "<3 T3R1 M44 K1 (+) M41 D3KH M41N3 G4R4M G4R4M K0YL3 D44L D1Y3 TH3 D3KH (+) K44L1 H0W1 K3 N4H1 =D :-) <3 =)) :|] O.o",
    "<3 SUN4 H41 T3R1 B44J1 K1 (+) S3 J4B P4N1 N1K4LT4 H41 T0U TUM S4B US S3 SUB4H F4C3 W4SH K3RT3 H0 Y3 S4CH H41 KY4 ? ;P (^^^) :) <(") <3",
    "<3 SUN4 H41 T3R1 B44J1 SW1MM1NG K3RT3 K3RT3 SW1MM1NG P00L K4 S44R4 P44N1 4PN1 (+) M41 L3 G4Y1 TH1 Y3 S4CH H41 KY4 ? <(") <3 3:) (y)",
    "<3 SUN4 H41 T3R1 M44 K1 (+) BUH4T N4MK33N H41 Y3 S4CH H41 KY4 ? =D :-) <3 =)) :|] O.o",
    "<3 SUN4 H41 T3R1 M44 K1 (+) BUH4T N4MK33N H41 Y3 S4CH H41 KY4 ? =D :-) <3 =)) :|] O.o",
    "<3 SUN4 H41 T3R1 B44J1 (+) M41 D00DH D44L0 T0U P4N1 N1K4LT4 H41 Y3 S4CH H41 KY4 ? ;P (^^^) :) <(") <3",
    "<3 SUN4 H41 T3R1 B44J1 BH33K M4NG M4NG K3 4PN1 (+) CHUDW4T1 H41 ? =D :-) <3 =)) :|] O.o",
    "<3 SUN4 H41 T3R4 B44P K4CHR44 UTH44N3 G4L1 G4L1 F1RT4 H41 Y3 S4CH H41 KY4 ? ;) <3 B-)",
    "<3 SUN4 H41 T3R4 B44P G4L10N M41 _!!_ (+)4 H41 ? Y3 S4CH H41 KY4 ?  ;P (^^^) :) <(") <3",
    "<3 4CH4 CH4L R00 M4T 4CH4 Y3 B4T4 T3R4 B44P BR34K D4NC3 K3R L3T4 H41 KY4 :|] <3 :* (y)",
    "<3 4B3 T3R1 M44 K1 N44K M41 2 M3T3R L4MB1 K33L G44D DUNG4 F1R T3R1 M44 K0 MUHH S3 S44NS L3N4 P4D3G4 H33H3H3H3H3 :v :P :D",
    "<3 SUN4 H41 T3R1 M44 N3 K1SS1 4UR S3 CHUDW4 K3 TUJH3 P3D4 K1Y4 H4Y KYUNK3 T3R4 B44P KHUSR4 H41 ? Y3 S4CH H41 KY4 ? =D :-) <3 =)) :|] O.o",
    "<3 4B3 T3R1 M44 K1 (+) D3KH J44 K3 ZUNG L4G GY4 H41 S44F T0H K4R L1Y4 K4R B3H3N K3 L0WD3 :/ :v :P :D",
    "<3 SUN4 H41 T3R4 B44P C1GR4TT3 4PN1 G44ND S3 P33T4 H4Y ? Y3 S4CH H41 KY4 ? ;P (^^^) :) <(") <3"
];

async function complimentCommand(sock, chatId, message) {
    try {
        if (!message || !chatId) {
            console.log('Invalid message or chatId:', { message, chatId });
            return;
        }

        let userToFyt;
        
        // Check for mentioned users
        if (message.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
            userToFyt = message.message.extendedTextMessage.contextInfo.mentionedJid[0];
        }
        // Check for replied message
        else if (message.message?.extendedTextMessage?.contextInfo?.participant) {
            userToFyt = message.message.extendedTextMessage.contextInfo.participant;
        }
        
        if (!userToFyt) {
            await sock.sendMessage(chatId, { 
                text: 'Please mention someone or reply to their message to Fyt them!'
            });
            return;
        }

        const Fyt = Fyt[Math.floor(Math.random() * fyt.length)];

        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));

        await sock.sendMessage(chatId, { 
            text: `Hey @${userToFyt.split('@')[0]}, ${fyt}`,
            mentions: [userToFyt]
        });
    } catch (error) {
        console.error('Error in fyt command:', error);
        if (error.data === 429) {
            await new Promise(resolve => setTimeout(resolve, 2000));
            try {
                await sock.sendMessage(chatId, { 
                    text: 'Please try again in a few seconds.'
                });
            } catch (retryError) {
                console.error('Error sending retry message:', retryError);
            }
        } else {
            try {
                await sock.sendMessage(chatId, { 
                    text: 'An error occurred while sending the compliment.'
                });
            } catch (sendError) {
                console.error('Error sending error message:', sendError);
            }
        }
    }
}

module.exports = { fytCommand };
