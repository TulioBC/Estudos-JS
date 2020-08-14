let integerArray = [4, 10, 17, 20];
let stringArray = ['abc', 'xyz', 'asd', 'qwer'];
let doubleArray = [0.12, 0.43, 1.76, 0.5];

function concatArrays(...args) {
    let finalArray = [];
    for (let index = 0; index < arguments.length; index++) {
        finalArray = finalArray.concat(arguments[index]);
    }
    return finalArray;
}

console.log(concatArrays(integerArray, stringArray));
