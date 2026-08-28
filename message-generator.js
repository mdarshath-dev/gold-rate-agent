function createGoldMessage(goldRate) {
    return `Todays gold price is Rs. ${goldRate.toLocaleString("en-IN")}`;
}

module.exports = { createGoldMessage };