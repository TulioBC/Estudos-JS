function arrayChange(arrayA, arrayB) {
    if (arrayA.length == arrayB.length) {
        for (let index = 0; index < arrayA.length; index++) {
            arrayA[index] = arrayA[index] + arrayB[index];
            arrayB[index] = arrayA[index] - arrayB[index];
            arrayA[index] = arrayA[index] - arrayB[index];
        }
    } else {
        return 'Arrays are different sizes';
    }

    console.log(`New array A: ${arrayA}`);
    console.log(`New array B: ${arrayB}`);
}

let arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];

arrayChange(arrayA, arrayB);
