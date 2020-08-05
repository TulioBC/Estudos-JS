const findOdd = () => {
    for (let index = 1; index < 100; index++) {
        if (index % 2 == 0) {
            console.log(`This number ${index} is an odd number`);
        }
    }
};

findOdd();
