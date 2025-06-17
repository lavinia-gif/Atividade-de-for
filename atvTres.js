/*3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas*/
var teclado = require("prompt-sync")();
var numero = [];
var minhaMatriz = [];
var linha = 6;
var coluna = 2;
for (var z = 4; z < linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 2; x < coluna; x++) {
        var numero_1 = teclado("digite o numero que vai estar no endere\u00E7o[".concat(z, ", ").concat(x, "] da matriz "));
    }
}
console.log(minhaMatriz);
