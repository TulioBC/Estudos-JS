const calculateFactorial = (number) => {
    if (number == 0) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
};

console.log(calculateFactorial(5));
