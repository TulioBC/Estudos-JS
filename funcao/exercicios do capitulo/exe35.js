let arrayStack = [1, 2, 3, 4, 5];

let arrayAdd = [6, 7, 8, 9, 10];

function addArrays(arrayStack, arrayAdd) {
    for (let index = 0; index < arrayAdd.length; index++) {
        console.log(arrayAdd[index]);
        arrayStack.push(arrayAdd[index]);
    }
    console.log(`Addition : ${arrayAdd}`);
    console.log(`Resulting Array: ${arrayStack}`);
}

addArrays(arrayStack, arrayAdd);