// using literal notation
const obj1 = {};
console.log(obj1);

// Object in JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// Construction functions
function product(name, price, desc) {
    this.getDiscountPrice = () => {
        return price * (1 - desc);
    };
}

const p1 = new product('Pen', 7.99, 0.15);
const p2 = new product('Notebook', 2998.99, 0.25);
console.log(p1.getDiscountPrice(), p2.getDiscountPrice());

// Factory function
function createWorker(name, baseSalary, faults) {
    return {
        name,
        baseSalary,
        faults,
        getSalary() {
            return (baseSalary / 30) * (30 - faults);
        },
    };
}

const f1 = createWorker('João', 7980, 4);
const f2 = createWorker('Maria', 11400, 1);
console.log(f1.getSalary(), f2.getSalary());
