function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
    console.log(typeof(valorEmReais));
    
}

formatarValorDecimal(0.1 + 0.2)