const bhaskara = (ax2, bx, c) => {

    let delta = bx ** 2 - 4 * ax2 * c;

    if(delta > 0){

        let resultados = [];

        let raiz1 = (-bx + Math.sqrt(delta)) / 2 * ax2;
        let raiz2 = (-bx - Math.sqrt(delta)) / 2 * ax2;

        resultados.push(raiz1);
        resultados.push(raiz2);

        return resultados;

    } else if(delta = 0){

        let resultados = [];

        let raiz1 = (-bx + Math.sqrt(delta)) / 2 * ax2;
        let raiz2 = (-bx - Math.sqrt(delta)) / 2 * ax2;

        resultados.push(raiz1);
        resultados.push(raiz2);

        return resultados;

    }else {
        return 'Delta é negativo'
    }

}

console.log(bhaskara(3, -5, 12));
console.log(bhaskara(1, 3, 2));
console.log(bhaskara(3, 1, 2));