console.log(7 / 0) // Não trava a execução do programa, ao invés disso da "Infinity"
console.log("10" / 2) // No JavaScript é possivel dividir uma String se ela for um numero
console.log('3' + 2) // Neste caso concatena os numeros ao invés de soma-los, pois o sinal de '+' também faz sentido na concatenação e por ter uma String ali ele considera dessa forma
console.log("Show!" * 2) // Quando a String não possui numero, apenas letras, o resultado é NaN (Not a Number)
console.log(0.1 + 0.7) /* Ao trabalhar com numeros decimais no JavaScript, devido as regras que ele utiliza para calcular bem rapido pode não dar o resultado exato, conforme podemos
neste exemplo aqui*/
/*console.log(10.toString())*/     /* Não é possivel chamar um função diretamente de um numero,o correto seria atribuir esse valor a uma variavel primeiro e depois chamar a função, ou
fazer como o exemplo a baixo, colocanco o numero entre ()*/ 
console.log((10.345).toFixed(2))