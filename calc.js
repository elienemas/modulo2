const input = require("readline-sync");

console.log("Seja bem vindo(a) Ao Auto Cart! Vamos fazer seu login")

var n1 = parseFloat("Insira nota 1")
var n2 = parseFloat("Insira nota 2")
var n3 = parseFloat("Insiat nota 3")
var n4 = parseFloat("Insiat nota 4")
var n5 = parseFloat("Insiat nota 5")

var media = (n1+n2+n3+n4+n5) /5

console.log(`sua média é ${media}`)
