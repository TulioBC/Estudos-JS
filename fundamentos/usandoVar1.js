{   
    {   
        {   
            {       // Uma var apenas detro de um bloco é global, significa que ela pode ser chamada fora do bloco
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)
// Variaveis dentro de uma function são locais, significa que ela só existe dentro da function, por exemplo, se eu quiser dar um console.log nela do lada de fora da function vai dar erro
function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)