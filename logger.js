const fs = require("fs");

function log(message) {
    const timestamp = new Date().toLocaleString("en-IN");

    const logMessage = `${timestamp} - ${message}\n`;

    fs.appendFileSync("gold-agent.log", logMessage);

    console.log(logMessage.trim());
}

module.exports = { log };