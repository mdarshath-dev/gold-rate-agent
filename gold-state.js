const fs = require("fs");

const stateFile =
    process.env.STATE_FILE || "last-gold-rate.json";
    
function getLastGoldRate() {
    if (!fs.existsSync(stateFile)) {
        return null;
    }

    const data = fs.readFileSync(stateFile, "utf8");

    return JSON.parse(data).goldRate;
}

function saveGoldRate(goldRate) {
    const data = {
        goldRate: goldRate
    };

fs.writeFileSync(stateFile, JSON.stringify(data, null, 2));
}

module.exports = {
    getLastGoldRate,
    saveGoldRate
};