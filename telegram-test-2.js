const { sendTelegramMessage } = require("./telegram-sender");

async function main() {
    const result = await sendTelegramMessage(
        "Hello from our reusable Telegram function! 🚀"
    );

    console.log(result);
}

main();