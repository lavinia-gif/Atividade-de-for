/*O código 1 e 2 desse slide deve ser salva e enviado juntos com
as atividades abaixo. Todo o conteúdo deve ser
compartilhado no githu
nome:Lavínia Maria Silva Campos*/
console.clear();
let teclado = require(`prompt-sync`)();
let meuVetor : string [] = []

let minhaMatriz: string[][]=[];

let linha : number = 2;
let coluna: number = 2;

for(let z = 0; z < linha; z++ ){
    minhaMatriz [z] = [];

    for(let x = 0; x < coluna; x++ ){
    let nome: string = teclado(`digite o nome que vai estar no endereço[${z}, ${x}] da matriz `);
    minhaMatriz[z][x]= nome;
    }

}

console.log(minhaMatriz);