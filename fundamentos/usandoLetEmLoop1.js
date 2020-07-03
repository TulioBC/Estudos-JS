// O let quando é inicializado tanto no escopo de um loop quanto no bloco dele é uma variavel local, por isso não consegue ser imprimido fora dele.
for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)