/*3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas
nome:Lavínia Maria Silva Campos*/

let teclado = require(`prompt-sync`)();
let numero : number [] = []

let minhaMatriz: number[][]=[];
let linha : number = 6
;
let coluna: number = 2;

for(let z = 4; z < linha; z++ ){
    minhaMatriz [z] = [];

    for(let x = 2; x < coluna; x++ ){
    let numero : number = teclado(`digite o numero que vai estar no endereço[${z}, ${x}] da matriz `);

    }

}
console.log(minhaMatriz);