/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
nome:Lavínia Maria Silva Campos*/
console.log (); 
let teclado = require (`prompt-sync`)();
let minhaMatriz : number [] [] = [];

for(let i = 0; i < 3; i++){
    minhaMatriz[i] = [];

    for(let z = 0; z < 3; z++){
     let nome: number = Math.floor(Math.random() * 10);
        minhaMatriz[i][z]= nome;
       // if(minhaMatriz[i][z] < 0 || minhaMatriz[i][z] > 9){
       //     console.log(`Número invalido`)
       // }
    }

}
console.log(minhaMatriz);