// dynamic collection key/value

const product = new Object();
product.name = 'Chair';
product['product brand'] = 'Generic';
product.price = 220;

console.log(product);
delete product.price;
delete product['product brand'];
console.log(product);

const car = {
    model: 'A4',
    price: 89000,
    owner: {
        name: 'Raul',
        age: 56,
        address: {
            street: 'ABC',
            number: 123,
        },
    },
    drivers: [
        {
            name: 'Junior',
            age: 19,
        },
        {
            name: 'Ana',
            age: 42,
        },
    ],
    calculateInsurance: function () {
        //...
    },
};

car.owner.address.number = 1000;
car['owner']['address']['street'] = 'Av Gigante';
console.log(car);

//delete car.drivers;
delete car.owner.address;
delete car.calculateInsurance;
console.log(car);
console.log(car.drivers);
console.log(car.drivers.length);
