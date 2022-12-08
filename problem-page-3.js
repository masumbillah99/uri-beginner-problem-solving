// bee | 2021 (Banknotes and Coins)
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseFloat(lines.shift()).toFixed(2);
var aux;

console.log('NOTAS:');
console.log(Math.floor(n / 100) + ' nota(s) de R$ 100.00');
aux = n % 100;

console.log(Math.floor(aux / 50) + ' nota(s) de R$ 50.00');
aux = aux % 50;

console.log(Math.floor(aux / 20) + ' nota(s) de R$ 20.00');
aux = aux % 20;

console.log(Math.floor(aux / 10) + ' nota(s) de R$ 10.00');
aux = aux % 10;

console.log(Math.floor(aux / 5) + ' nota(s) de R$ 5.00');
aux = aux % 5;

console.log(Math.floor(aux / 2) + ' nota(s) de R$ 2.00');
aux = aux % 2;

console.log('MOEDAS:');
console.log(Math.floor(aux / 1) + ' moeda(s) de R$ 1.00');
aux = aux % 1;

console.log(Math.floor(aux / 0.50) + ' moeda(s) de R$ 0.50');
aux = aux % 0.50;

console.log(Math.floor(aux / 0.25) + ' moeda(s) de R$ 0.25');
aux = aux % 0.25;

console.log(Math.floor(aux / 0.10) + ' moeda(s) de R$ 0.10');
aux = aux % 0.10;

console.log(Math.floor(aux / 0.05) + ' moeda(s) de R$ 0.05');
aux = aux % 0.05;

console.log(Math.floor(aux / 0.01) + ' moeda(s) de R$ 0.01');
aux = aux % 0.01;