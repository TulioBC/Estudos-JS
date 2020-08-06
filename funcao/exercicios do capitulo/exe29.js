const numbersInterval = (numbersArray) => {
    let intervalNumbers = 0;
    let outIntervalNumbers = 0;
    for (let index = 0; index < numbersArray.length; index++) {
        if (numbersArray[index] >= 10 && numbersArray[index] <= 20) {
            intervalNumbers++;
        } else {
            outIntervalNumbers++;
        }
    }
    console.log(
        `Our array have ${intervalNumbers} numbers in the interval 10 to 20, and ${outIntervalNumbers} out of that interval`
    );
};

// Below we have two ways to pass the array to the function.

numbersInterval([8, 34, 114, 2, 10, 1547, 177, 559, 689, 19, 20]);

let array = [4, 66, 11, 58, 153, 673, 17, 210, 4579];
numbersInterval(array);
