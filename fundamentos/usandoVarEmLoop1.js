// Pelo for não ser um tipo de function, e sim um tipo de loop, qualquer var criada dentro dele, seja no escopo ou dentro do bloco, será global, apenas o let(como veremos no prximo exercico), é local.
for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)
