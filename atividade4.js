/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade*/
var teclado = require("prompt-sync")();
var meuArray = [];
var arrayInvertido = [];
var z = 9;
for (var cont = 0; cont <= 9; cont++) {
    meuArray[cont] = parseInt(teclado("digite o ".concat(cont + 1, ":")));
}
for (var x = 0; x < 10; x++) {
    arrayInvertido[9] = meuArray[0];
    z--;
}
