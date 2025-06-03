/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade*/


let teclado = require (`prompt-sync`)();

let meuArray: number [] = [];
let arrayInvertido: number [] = [];
let z: number =9;

for (let cont = 0; cont <= 9; cont++){
meuArray[cont] = parseInt(teclado(`digite o ${cont+ 1}:`));
}
for(let x = 0 ; x < 10;x++){
 arrayInvertido[9] = meuArray[0];
  z--;  
}
 console.log(arrayInvertido)