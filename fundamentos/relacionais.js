console.log('01)', '1' == 1); // Vão ser iguais, pois neste caso estou comparando valor e não tipo.
console.log('02)', '1' === 1); // Neste caso vai dar false, além de comparar valor, compara o tipo de variavel, que neste caso é diferente.
console.log('03)', '3' != 3); // Segue o mesmo principio dos de cima.
console.log('04)', '3' !== 3); // Segue o mesmo principio dos de cima.

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime(0));

console.log('12)', undefined == null);
console.log('13)', undefined === null);