require("dotenv").config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = -5397579709;

const url = `https://api.telegram.org/bot${token}/sendMessage`;

async function main() {
    const data = {
        chat_id: chatId,
        text: "Hello from JavaScript! 🚀"
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    console.log(result);
}

main();