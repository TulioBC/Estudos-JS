/* Hoisting significa "elevar/elevação", é algo interessante de se saber sobre como o JavaScript interpreta certas coisas. Como você pode ver no coódigo a baixo na maioria das outras
   linguagens de programação ocorreria um erro devido a imprimirmos a variave "a" antes de declará-la, mas no javaScript isso não ocorre, pois ele realiza o hoisting, execute e veja
   o que contece.
*/
console.log('a =', a)
var a = 2
console.log('a =', a)

/* No código a baixo é como javaScript enxerga o código escrito a cima, ao executar você verá o resultado. Lembrando que isso é algo que não se aplica em códigos, não a forma correta
   de se codar, mas é importante saber, pois as vezes o código pode re comportar de forma estranha e você não saber o porquê. 
*/
var b
console.log('a =', b)
b = 2
console.log('a =', b)

// Diferente do var, o let não permite que isso aconteça e causa um erro como na maioria das outras linguagens. Veja no exemplo a baixo.
console.log('c =', c)
let c = 3
console.log('c =', c)
