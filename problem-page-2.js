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



// bee | 1016 (Distance)
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dis = parseInt(lines.shift());
console.log(dis * 2 + ' minutos');


// bee | 1017 (Fuel Soent)
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var time = parseInt(lines.shift());
var speed = parseInt(lines.shift());
var needLiters = ((time / 12) * speed).toFixed(3);
console.log(needLiters);


// bee | 1018  (Banknotes)
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
console.log(n);

var aux;
console.log(Math.floor(n / 100) + ' nota(s) de R$ 100,00');
aux = n % 100;

console.log(Math.floor(aux / 50) + ' nota(s) de R$ 50,00');
aux = aux % 50;

console.log(Math.floor(aux / 20) + ' nota(s) de R$ 20,00');
aux = aux % 20;

console.log(Math.floor(aux / 10) + ' nota(s) de R$ 10,00');
aux = aux % 10;

console.log(Math.floor(aux / 5) + ' nota(s) de R$ 5,00');
aux = aux % 5;

console.log(Math.floor(aux / 2) + ' nota(s) de R$ 2,00');
aux = aux % 2;

console.log(Math.floor(aux / 1) + ' nota(s) de R$ 1,00');


// bee | 1019 (Time Conversion)
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());
var hours = Math.floor((N / 3600)).toFixed(0);
var minutes = Math.floor(((N - (hours * 3600)) / 60)).toFixed(0);
var seconds = (N - ((hours * 3600) + (minutes * 60)));
console.log(hours + ":" + minutes + ":" + seconds);


// bee | 1020 (Age in Days)
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var age = parseInt(lines.shift());
var years = Math.floor(age / 365);
var months = Math.floor((age - (years * 365)) / 30);
var days = Math.floor(age - ((years * 365) + (months * 30)));

console.log(years + " ano(s)");
console.log(months + " mes(es)");
console.log(days + " dia(s)");