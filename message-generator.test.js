const { createGoldMessage } = require("./message-generator");

const result = createGoldMessage(14505);

if (result !== "Todays gold price is Rs. 14,505") {
    throw new Error(`Test failed. Got: ${result}`);
}

console.log("Message generator test passed!");