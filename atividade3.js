/*3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.*/
var teclado = require("prompt-sync")();
var meuArray = [];
for (var cont = 0; cont <= 9; cont++) {
    meuArray[cont] = parseInt(teclado("digite o ".concat(cont + 1, ":")));
}
console.log(meuArray);
