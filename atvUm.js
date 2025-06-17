/*O código 1 e 2 desse slide deve ser salva e enviado juntos com
as atividades abaixo. Todo o conteúdo deve ser
compartilhado no github*/
console.clear();
var teclado = require("prompt-sync")();
var meuVetor = [];
var minhaMatriz = [];
var linha = 2;
var coluna = 2;
for (var z = 0; z < linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        var nome = teclado("digite o nome que vai estar no endere\u00E7o[".concat(z, ", ").concat(x, "] da matriz "));
        minhaMatriz[z][x] = nome;
    }
}
console.log(minhaMatriz);
