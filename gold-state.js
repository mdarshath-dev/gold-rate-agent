const fs = require("fs");

function getLastGoldRate() {
    if (!fs.existsSync("last-gold-rate.json")) {
        return null;
    }

    const data = fs.readFileSync("last-gold-rate.json", "utf8");

    const state = JSON.parse(data);

    return state.goldRate;
}

function saveGoldRate(goldRate) {
    const state = {
        goldRate: goldRate
    };

    fs.writeFileSync(
        "last-gold-rate.json",
        JSON.stringify(state, null, 2)
    );
}

module.exports = { getLastGoldRate, saveGoldRate };