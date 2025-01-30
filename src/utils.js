function addNumbers(a, b) {
    return a + b;
}

function multiplyNumbers(a, b) {
    return a * b;
}
module.exports = { addNumbers, multiplyNumbers };

function divideNumbers(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}
