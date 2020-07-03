const fabricante = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, index) {
    console.log(`${index + 1}. ${nome}`);
}

fabricante.forEach(imprimir);
fabricante.forEach(fabricante => console.log(fabricante));
