const countNegativeNumbers = (arrayNumbers) => {
    let negativeNumbers = 0;
    for (let index = 0; index < arrayNumbers.length; index++) {
        if (arrayNumbers[index] < 0) {
            negativeNumbers++;
        }
    }
    if (negativeNumbers == 0) {
        return 'In this array we had no negative numbers.';
    }
    return `In this array we have ${negativeNumbers} negative numbers`;
};

let array1 = [8, 4, 56, 586, 16, 205, 876, 15, 69];

console.log(countNegativeNumbers(array1));

let array2 = [-8, 4, 56, -586, -16, 205, -876, -15, -69];

console.log(countNegativeNumbers(array2));
