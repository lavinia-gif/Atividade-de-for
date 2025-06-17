/*9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.*/
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
for (var i = 0; i < 6; i++) {
    minhaMatriz[i] = [];
    for (var z = 0; z < 6; z++) {
        var nome = teclado("digite o nome [".concat(i, ",").concat(z, "]:"));
        minhaMatriz[i][z] = nome;
    }
}
console.log(minhaMatriz);
