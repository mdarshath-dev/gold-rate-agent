require("dotenv").config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = -5397579709;

const url = `https://api.telegram.org/bot${token}/sendMessage`;

async function sendTelegramMessage(message) {
    try {
        const data = {
            chat_id: chatId,
            text: message
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!result.ok) {
            throw new Error(`Telegram API error: ${result.description}`);
        }

        return result;

    } catch (error) {
        console.error("Failed to send Telegram message:", error);
        throw error;
    }
}

module.exports = { sendTelegramMessage };