/*8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.*/
console.log();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
for (var i = 0; i < 3; i++) {
    minhaMatriz[i] = [];
    for (var z = 0; z < 3; z++) {
        var nome = teclado("digite o nome [".concat(i, ",").concat(z, "]:"));
        minhaMatriz[i][z] = nome;
        if (minhaMatriz[i][z] < 0 || minhaMatriz[i][z] > 20) {
            console.log("N\u00FAmero invalido");
        }
    }
}
console.log(minhaMatriz);
