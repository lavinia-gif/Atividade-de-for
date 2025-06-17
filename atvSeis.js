/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.*/
console.log();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
for (var i = 0; i < 3; i++) {
    minhaMatriz[i] = [];
    for (var z = 0; z < 3; z++) {
        var nome = teclado("digite o nome [".concat(i, ",").concat(z, "]:"));
        minhaMatriz[i][z] = nome;
        if (minhaMatriz[i][z] < 0 || minhaMatriz[i][z] > 9) {
            console.log("N\u00FAmero invalido");
        }
    }
}
console.log(minhaMatriz);
