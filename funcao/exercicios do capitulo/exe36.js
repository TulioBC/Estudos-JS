let baseArray = [1, 2, 3, 4, 5];

let multiplier = 2;

function multiplyArray(baseArray, multiplier) {
    let resultingArray = [];
    baseArray.forEach((element, arrayIndex, array) => {
        resultingArray.push(element * multiplier);
        /*  The logs below are tests, so we can understand what each parameter does in forEach.
            first parameter is the value who is stored in each array space, second shows us the 
            index of that array information, third is basically the complete array, using a '.length'
            we can know how many elements are in the array */
        console.log(`${element}`);
        console.log(`${arrayIndex}`);
        console.log(`${array.length}`);
    });

    return resultingArray;
}

console.log(multiplyArray(baseArray, multiplier));
