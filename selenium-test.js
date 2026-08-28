const { Builder } = require("selenium-webdriver");
const { getGoldRate } = require("./gold-scraper");
const { createGoldMessage } = require("./message-generator");

async function main() {
    const driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {
        await driver.get("https://thejewellersassociation.org/");

        const goldRate = await getGoldRate(driver);

        const message = createGoldMessage(goldRate);

        console.log(message);

    } catch (error) {
        console.log("Something went wrong:");
        console.log(error.message);

    } finally {
        await driver.quit();
    }
}

main();

