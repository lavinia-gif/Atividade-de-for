/*6- Faça um programa que verifique e mostre os números entre
1.000 e 2.000 (inclusive) que, quando divididos por 11
produzam resto igual a 2. Utilizar o laço de repetição FOR*/
var teclado = require("prompt-sync")();
var valor = parseFloat(teclado("Digite um valor que est\u00E1 entre 1.000 e 2.000:"));
for (var i = 1.000; i <= 2.000; i++) {
    if (i % 11 == 2) {
        console.log(i);
    }
}
