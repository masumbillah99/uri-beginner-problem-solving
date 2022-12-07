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
var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());
var pi = 3.14159;

var tri = ((A * C) / 2).toFixed(3);
var cir = (pi * C * C).toFixed(3);
var trap = (((A + B) * C) / 2).toFixed(3);
var squ = (B * B).toFixed(3);
var rec = (A * B).toFixed(3);

console.log("TRIANGULO: " + tri);
console.log("CIRCULO: " + cir);
console.log("TRAPEZIO: " + trap);
console.log("QUADRADO: " + squ);
console.log("RETANGULO: " + rec);


// bee | 1013


// bee | 1014
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var X = parseInt(lines.shift());
var Y = parseFloat(lines.shift());
var result = (X / Y).toFixed(3);
console.log(result + " km/l");


// bee | 1015


// bee | 1016


// bee | 1017


// bee | 1018


// bee | 1019


// bee | 1020
