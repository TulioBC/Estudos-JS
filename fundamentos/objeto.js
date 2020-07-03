// Essa aula é sobre notação literal de objetos, que é quando uma let ou const recebe {}, isso é algo totalmente diferente de JSON.
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.proco = 1998.90
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço.

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

// A linha a baixo é um JSON.

'{ "nome": "Camisa Polo", "preco": 79.90}' // Pode ser jogado em um JSON validator online para verificar.

// JSON (Java Script Object Notation) é um formato textual, para interoperabilidade entre sistemas, significa que é um tipo de arquivo para trocar informações entre sistemas.