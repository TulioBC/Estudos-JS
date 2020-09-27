const sequency = {
    _valor: 1, // convention private
    get valor() {
        return this._valor++;
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    },
};

console.log(sequency.valor, sequency.valor);
sequency.valor = 1000;
console.log(sequency.valor, sequency.valor);
sequency.valor = 900;
console.log(sequency.valor, sequency.valor);
