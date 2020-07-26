const numberInFull = (number) => {
    switch (number) {
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Quatro';
        case 5:
            return 'Cinco';
        case 6:
            return 'Seis';
        case 7:
            return 'Sete';
        case 8:
            return 'Oito';
        case 9:
            return 'Nove';
        case 10:
            return 'Dez';
        default:
            return 'Out of interval number';
    }
};

console.log(numberInFull(1));
console.log(numberInFull(5));
console.log(numberInFull(9));
console.log(numberInFull(13));
