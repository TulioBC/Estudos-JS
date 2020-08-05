const calculateHeight = (height1, tax1, height2, tax2) => {
    let heighestChildren;
    let smallestChindren;
    let heighestTax;
    let smallestTax;
    if (height1 != height2) {
        if (height1 < height2) {
            heighestChildren = height2;
            heighestTax = tax2;
            smallestChindren = height1;
            smallestTax = tax1;
        } else {
            heighestChildren = height1;
            heighestTax = tax1;
            smallestChindren = height2;
            smallestTax = tax2;
        }
        if (heighestTax > smallestTax) {
            console.log(
                'The smallest children will never pass the heighest children'
            );
        } else {
            let index = 0;
            while (smallestChindren < heighestChildren) {
                index++;
                smallestChindren += smallestTax;
                heighestChildren += heighestTax;
            }
            console.log(
                `Took ${index} years to the smallest children surpass the heighest one`
            );
        }
    } else {
        console.log('The children are same height');
    }
};

calculateHeight(160, 5, 170, 2);
