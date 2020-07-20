const checkLeapYear = (year) => {
    if (year <= 0) {
        return false;
    } else if (year % 4 == 0) {
        return true;
    } else if (year % 100 == 0) {
        return false;
    } else if (year % 400 == 0) {
        return true;
    } else {
        return false;
    }
};

console.log(checkLeapYear(1996));
console.log(checkLeapYear(2020));
console.log(checkLeapYear(800));
console.log(checkLeapYear(2010));