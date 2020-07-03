console.log(Math.ceil(6.1))
let name = 'dois';
const obj1 = {}
obj1.nome = 'Bola' // Mesmo declarando o conteudo de obj1 fora do bloco, não haverá problema, o JavaScript reconhecea informação e meio que a adiciona onde ela deveria estar.
// obj1['nome'] = 'Bola2' // Esta notação faz exatamente a mesca coisa que a da linha de cima, mas a de cima é o jeito mais recomendado.
console.log(obj1.nome)

function Obj(nome, idade, altura) {
    this.nome = nome
    this.idade = idade
    this.altura = altura
    this.exec = function (idade_1, idade_2) { 
        this.media = (idade_1 + idade_2) / 2;
        console.log(this.media);
        
    }
}

function mediaIdade(idade_1, idade_2){
    
return (idade_1 + idade_2) / 2;
}

let idade = mediaIdade(20, 10);

const obj2 = new Obj('Antônio', idade, 1.71)
const obj3 = new Obj('João', 21, 1.80)
console.log(obj2.nome + ' possui ' + obj2.idade + ' anos, e altura de ' + obj2.altura)
console.log(`${obj2.nome} possui ${obj2.idade} anos, e altura de ${obj2.altura}`); // Forma mais eficiente do que a registrada na linha de cima, mais maleavel e facil de customizar e editar.

console.log(obj3.nome + ' possui ' + obj3.idade + ' anos, e altura de ' + obj3.altura)
console.log(`${obj3.nome} possui ${obj3.idade} anos, e altura de ${obj3.altura}`)

console.log();

console.log(obj3);

obj3.exec(23, 42);

console.log(obj3);

function createObject(name, age, height) {
    return {name, age, height};
}
const user_1 = createObject('Caio', 25, 1.75);

console.log(user_1);
console.table(user_1);


const user_2 = createObject('Jesiel', 22, 1.80);

console.log(user_2);
console.table(user_2);

const users = [user_1, user_2];

console.log(users);
console.table(users);