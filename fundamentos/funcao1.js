// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Mesmo que a função receba dois parametros, o javaScript permite que seja passado apenas 1, o segundo nesse caso será considerado "Undefined", e o resultado da soma de um numero com um "Undefined" é NaN(Not a Number)
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // O javaScript permite que sejam passados mais parametros do que a função está esperando, e nesse caso ele vai pegar os dois primeiros e ignorar os restantes.
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())

