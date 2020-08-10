const valueSearch = (numberCollection) => {
    let big;
    let small;
    for (let index = 0; index < numberCollection.length; index++) {
        if (big === undefined && small === undefined) {
            big = numberCollection[index];
            small = numberCollection[index];
        } else {
            if (numberCollection[index] > big) {
                big = numberCollection[index];
            }
            if (numberCollection[index] < small) {
                small = numberCollection[index];
            }
        }
    }
    return [big, small];
};

let array = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];

console.log(valueSearch(array));
