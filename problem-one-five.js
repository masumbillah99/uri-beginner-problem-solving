// bee | 1000
console.log("Hello World!");


// bee | 1001
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var X = A + B;
console.log("X = " + X + "\n");


// bee | 1002
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let R = parseFloat(lines.shift());
let pi = 3.14159;
let A = (pi * (R * R)).toFixed(4);
console.log("A=" + A);


// bee | 1003
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
const SOMA = A + B;
console.log("SOMA = " + SOMA);


// bee | 1004
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let x = parseInt(lines.shift());
let y = parseInt(lines.shift());
let PROD = x * y;
console.log("PROD = " + PROD);


// bee | 1005
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let A = parseFloat(lines.shift()).toFixed(1);
let B = parseFloat(lines.shift()).toFixed(1);
let MEDIA = (((A * 3.5) + (B * 7.5)) / 11).toFixed(5);
console.log("MEDIA = " + MEDIA);