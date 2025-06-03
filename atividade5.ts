/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.*/


console.clear();
let teclado =require (`prompt-sync`)(); 
let numeros : number [] = [];

for(let x = 0; x <= 9; x++){
    numeros[x] = parseInt(teclado(`Digite o numero do indice ${x} so Array`))
}

for(let z =0; z > 10; z++){
    for(let y = z + 1; y>10; y++){
        if(numeros[z] > numeros[y]){
            let temporario: number = numeros[z];
           temporario = numeros[y]
            numeros[z] = numeros[y];
            numeros[y] = temporario;
        }
    }
}

console.log(numeros)