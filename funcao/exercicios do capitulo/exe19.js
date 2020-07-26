const calculateOrder = (code, qtty) => {
    switch (code) {
        case 100:
            let totalHotDog = qtty * 3;
            return totalHotDog;
        case 200:
            let simpleBurger = qtty * 4;
            return simpleBurger;
        case 300:
            let cheeseBurger = qtty * 5.5;
            return cheeseBurger;
        case 400:
            let bauru = qtty * 7.5;
            return bauru;
        case 500:
            let soda = qtty * 3.5;
            return soda;
        case 600:
            let juice = qtty * 2.8;
            return juice;
        default:
            return 'Product did not exist';
    }
};

console.log(calculateOrder(300, 4));
console.log(calculateOrder(600, 3));
console.log(calculateOrder(30, 4));
