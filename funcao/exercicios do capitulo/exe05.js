const arredondaValor = (valor) => {
    let valorCorreto = `R$ ${valor.toFixed(2).toString().replace('.', ',') }`;
    console.log(valorCorreto);
    console.log(typeof(valorCorreto));
    
}

arredondaValor(0.1 + 0.2);