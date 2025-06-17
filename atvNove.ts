/*9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.*/
 console.clear();
 let teclado = require (`prompt-sync`)();
 let minhaMatriz : number [] [] = [];

 let linha :number = 6
 let coluna : number = 6
 let soma
for(let i =0; i < 6; i++){
    minhaMatriz[i] = [];

    for(let z=0; z < 6; z++){
     let numero: number = Math.floor(Math.random() * 5);
        minhaMatriz[i][z]= numero;
        
        

    }

}
console.log(minhaMatriz)


 