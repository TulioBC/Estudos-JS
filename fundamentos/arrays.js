const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // O nuemro indicado entre [] é o indice que eu quero que seja mostrado.
console.log(valores[4])

valores[4] = 10 // É possivel adicionar uma nova informação no array dessa forma.
console.log(valores)
console.log(valores.length) // Mostra o numero de informações que tem dentro do arry, começa a contar do 1.

valores.push({id: 3}, false, null, 'teste') // O .push insere as informações no final do array.
console.log(valores)

console.log(valores.pop()) // o .pop quando não tem nada especificado dentro dos () remove a ultima informação do array.

delete valores[0] // Também é possivel remover informações do array utilizado o 'delete', e nas [] indica-se o index correspondente da informação que se quer apagar.
console.log(valores)

console.log(typeof valores) // Um array é do tipo object.