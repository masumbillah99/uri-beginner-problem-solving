// bee | 1011
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var R = parseFloat(lines.shift());
var pi = 3.14159;
var VOLUME = ((4 / 3) * pi * (R * R * R)).toFixed(3);
console.log("VOLUME = " + VOLUME);


// bee | 1012
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift()).toFixed(1);
var B = parseFloat(lines.shift()).toFixed(1);
var C = parseFloat(lines.shift()).toFixed(1);
var pi = 3.14159;
var TRIANGULO = ((1 / 2) * A * C).toFixed(3);
var CIRCULO = (pi * C * C).toFixed(3);
var QUADRADO = (B * B).toFixed(3);
var RETANGULO = (A * B).toFixed(3);
const tp = (A+B/2)*C;
console.log("TRIANGULO: " + TRIANGULO);
console.log("CIRCULO: " + CIRCULO);
console.log("QUADRADO: " + QUADRADO);
console.log("RETANGULO: " + RETANGULO);
console.log("tp = " + tp);


// bee | 1013


// bee | 1014


// bee | 1015


// bee | 1016


// bee | 1017


// bee | 1018


// bee | 1019


// bee | 1020
