/*8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra
nome:Lavínia Maria Silva Campos */
console.log();
let teclado = require (`prompt-sync`)();
let minhaMatriz : number [] [] = [];
let numeroMaior: number = 0;
let linha: number = 0;
let coluna: number = 0;

for(let i = 0; i < 3; i++){
    minhaMatriz[i] = [];

    for(let z = 0; z < 3; z++){
     let nome: number = Math.floor(Math.random() * 21);
        minhaMatriz[i][z]= nome;
        if(nome > numeroMaior){
           numeroMaior = nome;
           linha = i;
           coluna = z;
        }
    }

}

console.log(`${numeroMaior}`);
console.log(`${linha} , ${coluna}`);


console.log(minhaMatriz);