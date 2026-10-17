function createGoldMessage(goldRate) {
    return `Todays 22k gold price is Rs. ${goldRate.toLocaleString("en-IN")}`;
}

module.exports = { createGoldMessage };