const { Builder } = require("selenium-webdriver");
const { getGoldRate } = require("./gold-scraper");
const { sendTelegramMessage } = require("./telegram-sender");
const { createGoldMessage } = require("./message-generator");


async function main() {
    const driver = await new Builder()
        .forBrowser("chrome")
        .build();

    await driver.get("https://thejewellersassociation.org/");

    const goldRate = await getGoldRate(driver);

    console.log("Gold rate:", goldRate);

    const message = createGoldMessage(goldRate);

    console.log("Message:", message);

    const result = await sendTelegramMessage(message);

    await driver.quit();
}

main();