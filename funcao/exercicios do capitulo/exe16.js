const mathOperations = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'The chosen operation is invalid, try again';
    }
};

console.log(mathOperations(2, 5, '/'));
console.log(mathOperations(1, 3, '*'));
console.log(mathOperations(6, 7, '-'));
console.log(mathOperations(4, 0, '/'));
console.log(mathOperations(1, 1, 'a'));
