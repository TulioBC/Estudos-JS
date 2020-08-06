const calculateHeight = (height1, tax1, height2, tax2) => {
    let highestChildren;
    let smallestChildren;
    let highestTax;
    let smallestTax;
    if (height1 != height2) {
        if (height1 < height2) {
            highestChildren = height2;
            highestTax = tax2;
            smallestChildren = height1;
            smallestTax = tax1;
        } else {
            highestChildren = height1;
            highestTax = tax1;
            smallestChildren = height2;
            smallestTax = tax2;
        }
        if (highestTax > smallestTax) {
            console.log(
                'The smallest children will never pass the highest children'
            );
        } else {
            let index = 0;
            while (smallestChildren < highestChildren) {
                index++;
                smallestChildren += smallestTax;
                highestChildren += highestTax;
            }
            console.log(
                `Took ${index} years to the smallest children surpass the highest one`
            );
        }
    } else {
        console.log('The children are same height');
    }
};

calculateHeight(160, 5, 170, 2);
