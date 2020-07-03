const triangulo = (x, y, z) => {
    if (x == y && y == z){
        console.log('Esse triangulo é Equilatero');
    } else if (x == y || x == z || y ==z) {
        console.log('Esse triangulo é Isósceles');
    } else {
        console.log('Esse triangulo é Escaleno');
    }
}

triangulo(4, 5, 6);
triangulo(3, 3, 6);
triangulo(5, 5, 5);

