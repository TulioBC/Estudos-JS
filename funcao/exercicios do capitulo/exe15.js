const carModel = (car) => {
    switch (car) {
        case 'hatch':
            return 'Purchase Successful';
        case 'sedan':
            return 'Are you sure you does not prefer this model?';
        case 'motorcycle':
            return 'Are you sure you does not prefer this model?';
        case 'truck':
            return 'Are you sure you does not prefer this model?';
        default:
            return 'We do not work with this type of vehicle';
    }
};

console.log(carModel('hatch'));
console.log(carModel('truck'));
console.log(carModel('test'));
