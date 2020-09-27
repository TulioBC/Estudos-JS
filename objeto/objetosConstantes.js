// person -> 123 -> {...}
const person = { name: 'Joao' };
person.name = 'Pedro';
console.log(person);

// person -> 456 -> {...};
// person = { name: 'Ana'};

Object.freeze(person);
person.name = 'Maria';
person.address = 'Rua ABC';
delete person.name;

console.log(person.name);
console.log(person);

const constantPerson = Object.freeze({ name: 'Joao' });
constantPerson.nome = 'Maria';
console.log(constantPerson);
