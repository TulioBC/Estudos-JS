const salaryRaise = (plan, salary) => {
    switch (plan) {
        case 'a':
            salary *= 1.1;
            return salary;
        case 'b':
            salary *= 1.15;
            return salary;
        case 'c':
            salary *= 1.2;
            return salary;
        default:
            return 'Slary plan invalid, try again';
    }
};

console.log(salaryRaise('a', 1000));
console.log(salaryRaise('b', 1000));
console.log(salaryRaise('c', 2000));
console.log(salaryRaise('z', 1000));
