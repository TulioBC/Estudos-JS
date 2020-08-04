const associationCost = (monthNumber, annuity) => {
    if (monthNumber > 0 && monthNumber < 13) {
        let delay = monthNumber - 1;
        return (annuity * (1 + 0.05) ** delay).toFixed(2);
    } else {
        return 'Invalid Month.';
    }
};

console.log(associationCost(4, 100));