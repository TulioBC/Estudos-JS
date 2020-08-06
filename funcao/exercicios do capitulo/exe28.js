const oddEven = (numberSelection) => {
    let oddNumbers = 0;
    let evenNumbers = 0;
    for (let index = 0; index < numberSelection.length; index++) {
        if (numberSelection[index] % 2 == 0) {
            oddNumbers++;
        } else {
            evenNumbers++;
        }
    }

    console.log(
        `We have ${oddNumbers} odd number and ${evenNumbers} even number in the array`
    );
};

// Below we have two ways to pass the array to the function.

oddEven([6, 4, 14, 2, 10, 17, 177, 59, 89]);

let array = [54, 65, 13, 28, 153, 673, 210, 457];
oddEven(array);
