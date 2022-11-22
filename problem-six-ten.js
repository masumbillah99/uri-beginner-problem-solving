// bee | 1006
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let A = parseFloat(lines.shift()).toFixed(1);
let B = parseFloat(lines.shift()).toFixed(1);
let C = parseFloat(lines.shift()).toFixed(1);
const MEDIA = ((A * 2 + B * 3 + C * 5) / 10).toFixed(1);
console.log("MEDIA = " + MEDIA);


// bee | 1007
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());
let D = parseFloat(lines.shift());
let DIFERENCA = (A * B - C * D);
console.log("DIFERENCA = " + DIFERENCA);


// bee | 1008
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let number = parseInt(lines.shift());
console.log("NUMBER = " + number);
let workedHours = parseInt(lines.shift());
let receivedAmount = parseFloat(lines.shift());
let SALARY = (workedHours * receivedAmount).toFixed(2);
console.log("SALARY = U$ " + SALARY);


// bee | 1009
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var name = (lines.shift());
var salary = parseFloat(lines.shift());
var totalSale = parseFloat(lines.shift());
var TOTAL = (((15 / 100) * totalSale) + salary).toFixed(2);
console.log("TOTAL = R$ " + TOTAL);


// bee | 1010
