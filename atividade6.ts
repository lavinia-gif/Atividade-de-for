/*6- Faça um programa que verifique e mostre os números entre
1.000 e 2.000 (inclusive) que, quando divididos por 11
produzam resto igual a 2. Utilizar o laço de repetição FOR*/


let teclado = require (`prompt-sync`) ();
let valor = parseFloat(teclado(`Digite um valor que está entre 1.000 e 2.000:`));


for (let i = 1.000; i <= 2.000; i++){

    if (i % 11 == 2){
        console.log(i)
    }
}

