const { Builder } = require("selenium-webdriver");
const { getGoldRate } = require("./gold-scraper");
const { sendTelegramMessage } = require("./telegram-sender");
const { createGoldMessage } = require("./message-generator");
const { log } = require("./logger");


async function main() {
    const driver = await new Builder()
        .forBrowser("chrome")
        .build();

        log("Gold agent started");

    try {
        await driver.get("https://thejewellersassociation.org/");

        const goldRate = await getGoldRate(driver);

        log(`Gold rate retrieved: ${goldRate}`);

        //console.log("Gold rate:", goldRate);

        const message = createGoldMessage(goldRate);

        log(`Message generated: ${message}`);

        //console.log("Message:", message);

        await sendTelegramMessage(message);

        log("Telegram message sent successfully");

    } catch (error) {
        console.error("Gold agent failed:", error);

    } finally {
        log("Gold agent finished");
        await driver.quit();
    }
}

main();

