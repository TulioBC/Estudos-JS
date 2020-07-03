// Como o var dentro de apenas blocos está no escopo global, no exemplo a baixo o resultado será 2 parapara os dois console.log
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)