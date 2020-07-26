const classificaDia = (dia) => {
    switch (dia) {
        case 1:
            return 'Fim de semana';
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia util';
        case 7:
            return 'Fim de semana';
        default:
            return 'Dia Invalido';
    }
};

console.log(classificaDia(1));
console.log(classificaDia(4));
console.log(classificaDia(7));
console.log(classificaDia(14));
