/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.*/
console.clear();
var teclado = require("prompt-sync")();
var numeros = [];
for (var x = 0; x <= 9; x++) {
    numeros[x] = parseInt(teclado("Digite o numero do indice ".concat(x, " so Array")));
}
for (var z = 0; z > 10; z++) {
    for (var y = z + 1; y > 10; y++) {
        if (numeros[z] > numeros[y]) {
            var temporario = numeros[z];
            temporario = numeros[y];
            numeros[z] = numeros[y];
            numeros[y] = temporario;
        }
    }
}
console.log(numeros);
