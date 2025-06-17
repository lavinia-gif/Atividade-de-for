/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
nome:Lavínia Maria Silva Campos*/
console.log();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
for (var i = 0; i < 3; i++) {
    minhaMatriz[i] = [];
    for (var z = 0; z < 3; z++) {
        var nome = Math.floor(Math.random() * 10);
        minhaMatriz[i][z] = nome;
        // if(minhaMatriz[i][z] < 0 || minhaMatriz[i][z] > 9){
        //     console.log(`Número invalido`)
        // }
    }
}
console.log(minhaMatriz);
