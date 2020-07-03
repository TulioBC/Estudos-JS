// Novo recurso do WS2015

const pessoa = {
    nome: 'Ana',
    idaded: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa; // Essa linha removerá as variaveis "nome" e "idade" de dentro de "pessoa", e fará com que elas se tornem variavais de fora. 
// Na linha a baixo é mostrado isso, não será preciso itilizar "console.log(pessoa.nome)" ou "console.log(pessoa.idade)", apenas "console.log(nome)" ou "console.log(idade)"
console.log(nome, idade );

const { nome: n, idade: i } = pessoa; // Aqui estamos extraindo o nome e a idade da pessoa e atribuindo ambos para as variaveis "n" e "i"
console.log(n, i); 

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep);

const { conta: {ag, num } } = pessoa
console.log(ag, num);
