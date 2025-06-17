/*5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela
nome:Lavínia Maria Silva Campos*/
console.log();
let teclado = require (`prompt-sync`)();
let minhaMatriz : number [] [] = [];

for(let i =0; i < 3; i++){
    minhaMatriz[i] = [];

    for(let z=0; z < 3; z++){
     let nome: number = Math.floor(Math.random() * 4);
        minhaMatriz[i][z]= nome;

    }

}
console.log(minhaMatriz);