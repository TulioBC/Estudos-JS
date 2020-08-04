const healthInsuranceCost = (age) => {
    if (age < 10) {
        return 100 + 80;
    }else if (age <= 30){
        return 100 + 50;
    }else if (age <= 60){
        return 100 + 95;
    }else if (age > 60){
        return 100 + 130;
    }
};

console.log(healthInsuranceCost(10));