function aP(n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r * i);
    }
    console.log(`Sum:  ${n * (a1 + (a1 + (n - 1) * r)) / 2}`);
}

function gP(n, a1, r) {
    //console.log(a1)
    for (let i = 0; i < n; i++) {
        console.log(a1 * r ** i);
    }
    console.log(`Sum:  ${(a1 * (r ** n - 1)) / (r - 1)}`);
}

aP(10, 10, 15);

gP(10, 5, 3);
