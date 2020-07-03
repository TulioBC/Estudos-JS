 const notas = [7.7, 6.5, 5.2, 8.9, 3.1, 7.1, 9.0];

 // Sem calback
 let notasBaixas1 = [];
 for (let index in notas){
     if (notas[index] < 7){
         notasBaixas1.push(notas[index]);
     }
 }

 console.log(notasBaixas1);

 // Com callback
 const notasBaixas2 = notas.filter(function (nota) {
     return nota < 7;
 })


 console.log(notasBaixas2);

 // Com callback e arrowfunction
 const notasBaixas3 = notas.filter( (nota) => nota < 7);
 
 console.log(notasBaixas3);
