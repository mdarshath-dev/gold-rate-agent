require("dotenv").config();

const token = process.env.TELEGRAM_BOT_TOKEN;

if (token) {
    console.log("Telegram token was loaded successfully!");
} else {
    console.log("Telegram token was NOT found.");
}