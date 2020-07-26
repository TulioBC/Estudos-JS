const checkFruit = (fruit) => {
    switch (fruit) {
        case 'apple':
            return 'We do not sell this fruit here';
        case 'kiwi':
            return 'We are short in kiwi';
        case 'watermelon':
            return 'Here is, cost 3 dollars per kilo';
        default:
            return 'Error try another fruit';
    }
};

console.log(checkFruit('apple'));
console.log(checkFruit('watermelon'));
