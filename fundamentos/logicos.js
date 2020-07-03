function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor (não recomendado tilizar)
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; // operador unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(true, false));

//=========================================
// Utilizando Arrow function

const compras1 = (trabalho3, trabalho4) => {
    const comprarSorvete = trabalho3 || trabalho4;
    const comprarTv50 = trabalho3 && trabalho4;
    const comprarTv32 = trabalho3 != trabalho4;
    const manterSaudavel = !comprarSorvete;

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras1(true, true));
console.log(compras1(true, false));
console.log(compras1(false, true));
console.log(compras1(true, false));