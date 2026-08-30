const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { getGoldRate } = require("./gold-scraper");
const { sendTelegramMessage } = require("./telegram-sender");
const { createGoldMessage } = require("./message-generator");
const { log } = require("./logger");
const { getLastGoldRate, saveGoldRate } = require("./gold-state");


async function main() {
const options = new chrome.Options();

options.addArguments(
    "--headless",
    "--no-sandbox",
    "--disable-dev-shm-usage"
);

const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

        log("Gold agent started");

    try {
        await driver.get("https://thejewellersassociation.org/");

        const goldRate = await getGoldRate(driver);

        log(`Gold rate retrieved: ${goldRate}`);

        const lastGoldRate = getLastGoldRate();

        log(`Previous gold rate: ${lastGoldRate}`);

        //console.log("Gold rate:", goldRate);

if (lastGoldRate === null || lastGoldRate !== goldRate) {
    const message = createGoldMessage(goldRate);

    log(`Message generated: ${message}`);

    await sendTelegramMessage(message);

    log("Telegram message sent successfully");

    saveGoldRate(goldRate);

    log(`Saved new gold rate: ${goldRate}`);
} else {
    log("Gold rate has not changed. Telegram message not sent.");
}

    } catch (error) {
        
    log(`Gold agent failed: ${error.message}`);
    console.error(error);

    } finally {
        log("Gold agent finished");
        await driver.quit();
    }
}

main();

