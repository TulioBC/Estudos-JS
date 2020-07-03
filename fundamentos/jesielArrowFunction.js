const calcularMedia = (age_1, age_2) => {
    return (age_1 + age_2) / 2
}

const media_1 = calcularMedia(20, 10)

console.log(media_1);

const media_2 = calcularMedia(20, 20)

console.log(media_2);
/*
 No bloco a baixo, eu posso chamar a função varias vazes e adicionar na mesma variavel "media", devido a eu estar dando push no conteudo dela para o meu array a cada media 
 calculada.
*/
const medias = [];
let media = calcularMedia(20, 30);
medias.push(media);
media = calcularMedia(17, 25);
medias.push(media);
console.log(medias);

