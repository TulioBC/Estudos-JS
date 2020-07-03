const imprimirResultado = (nota) => {
    if(nota >= 7) {
        console.log(`Aprovado!`);
    } else {
        console.log(`Reprovado!`);        
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado(`Epa!`) // Por ser uma linguagem fracamente tipada, não vai acusar e nem causar erro, mas sempre vai cair no else.