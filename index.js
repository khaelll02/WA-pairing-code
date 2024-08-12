import { makeWASocket, useMultiFileAuthState, DisconnectReason } from '@whiskeysockets/baileys';
import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (text) => new Promise((resolve) => rl.question(text, resolve));

const startSession = async () => {
    const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false
    });

    // Display prompt and get phone number
    const phoneNumber = await question(chalk.blueBright.bold('Enter the phone number (with country code): '));

    setTimeout(async () => {
        try {
            let code = await sock.requestPairingCode(phoneNumber); // Simulated method for generating pairing code
            code = code?.match(/.{1,4}/g)?.join("-") || code;
            console.log(
                chalk.bgMagentaBright.white.bold(' Pairing Code: ') +
                chalk.bgBlack.white.bold(` ${code} `)
            );
        } catch (error) {
            console.error(chalk.red.bold('Failed to generate pairing code:'), error);
        } finally {
            rl.close();
        }
    }, 3000);

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (reason === DisconnectReason.loggedOut) {
                console.log(chalk.yellow.bold('Logged out, please scan QR code again.'));
                process.exit(1);
            }
            if (reason === DisconnectReason.connectionReplaced) {
                console.log(chalk.yellow.bold('Connection replaced, please close other sessions.'));
                process.exit(1);
            }
            if (reason === DisconnectReason.restartRequired) {
                console.log(chalk.yellow.bold('Restart required, restarting...'));
                startSession();
            }
        }
        if (connection === 'open') {
            console.log(chalk.green.bold('Connection successful!'));
        }
    });

    sock.ev.on('creds.update', saveCreds);
};

startSession().catch(err => console.error(chalk.red.bold('Error:'), err));
