const { Builder } = require("selenium-webdriver");
const { getGoldRate } = require("./gold-scraper");
const { sendTelegramMessage } = require("./telegram-sender");
const { createGoldMessage } = require("./message-generator");


async function main() {
    const driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {
        await driver.get("https://thejewellersassociation.org/");

        const goldRate = await getGoldRate(driver);

        console.log("Gold rate:", goldRate);

        const message = createGoldMessage(goldRate);

        console.log("Message:", message);

        await sendTelegramMessage(message);

    } catch (error) {
        console.error("Gold agent failed:", error);

    } finally {
        await driver.quit();
    }
}

main();

