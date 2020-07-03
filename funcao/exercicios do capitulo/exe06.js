const calculaJurosSimples = (capInicial, taxaJuros, tempoApli) => {

    let montanteFinal = capInicial + (tempoApli * (capInicial * taxaJuros));

    return montanteFinal;
}

const calculaJurosCompostos = (capInicial, taxaJuros, tempoApli) => {

    for (let index = 0; index < tempoApli; index++) {

        let totalJuros = capInicial * taxaJuros;
        capInicial = capInicial + totalJuros;

    }

    let montanteFinal = capInicial;

    return montanteFinal;
}

console.log(calculaJurosSimples(100, 0.1, 2));
console.log(calculaJurosCompostos(100, 0.1, 2));

