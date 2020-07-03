function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}`);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`É verdade que... ${valor}`);
        
    }
}

// Passado os paramentros a baixo o EcmaScript entende como false.
seForVerdadeEuFalo(); // Não passar nada na função é a mesma coisa que passar undefined.
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo(''); // Isso é uma string vazia.
seForVerdadeEuFalo(0); // 0 é o unico numero que o EcmaScript reconhece como falso.

// Passado os paramentros a baixo o EcmaScript entende como true.
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' '); // Dentro da string o espaço é uma informação por isso não é igual a vazio.
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});