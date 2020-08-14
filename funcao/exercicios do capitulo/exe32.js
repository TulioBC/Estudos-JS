const arithmeticAverage = (arrayNumbers) => {
    let sumArrayNumbers = 0;
    for (let index = 0; index < arrayNumbers.length; index++) {
        sumArrayNumbers += arrayNumbers[index];
    }

    let aux = sumArrayNumbers / arrayNumbers.length;
    return aux.toFixed(2);
};

let array = [6, 35, 12, 5, 21, 945];

console.log(arithmeticAverage(array));
