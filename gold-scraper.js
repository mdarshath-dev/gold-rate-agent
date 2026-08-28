const { By, until } = require("selenium-webdriver");

async function getGoldRate(driver) {
    const goldElement = await driver.wait(
        until.elementLocated(By.id("goldrate_22ct")),
        10000
    );

    const goldRate = await goldElement.getAttribute("textContent");

    return Number(goldRate);
}

module.exports = { getGoldRate };