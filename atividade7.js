/*7- Faça um programa para calcular n! (Fatorial de
    n), sendo que o valor inteiro de n é fornecido pelo
    usuário. utilize laço de repetição for.
    */
console.clear();
var teclado = require("prompt-sync")();
var n = parseInt(teclado("digite o n\u00FAmero a ser calculado: "));
var fatorial = 1;
for (var z = 1; z <= n; z++) {
    fatorial *= z;
}
console.log(fatorial);
