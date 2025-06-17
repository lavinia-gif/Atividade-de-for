/*4- Altere o código dois(2) desse conteúdo para funcionar com números,
faça o teste se o laço de repetição referente a linha da matriz chega criar a quarta linha,
salve dessa forma e anexe a atividade o arquivo .ts e um print da tela do cmd(prompt command) com o resultado do teste.
nome:Lavínia Maria Silva Campos
*/
console.log();
var teclado = require("prompt-sync")();
var matrizDois = new Array(3);
for (var i = 0; i < 4; i++) {
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 4; j++) {
        var numero = Math.floor(Math.random() * 5);
        matrizDois[i][j] = numero;
    }
}
console.log(matrizDois);
