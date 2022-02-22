const input  = require("readline-sync")
// esta entrada permite que a variável input utilize a readline-sync. O comando require é usado antes da dependência

console.log("Seja bem vindo(a)! Vamos fazer seu login")

const idade = input.question ("Insira sua idade:") 
 

if (idade >= 16 && idade <18) {
    console.log('pode entrar, mas não pode beber')
  } else if (idade >=18) {
      console.log("Pode entrar e bora beber")
  }  else    {
    console.log('entrada permitida apenas para maiores de idade.')
  }

  const input = require("readline-sync");

console.log("Seja bem vindo(a)! Vamos fazer seu login")

const idade = input.question("Insira sua idade:") 
const carteira = input.question("Voce tem habilitacao? Digite Sim ou Nao: ") 

if (idade>= 18 && carteira === "sim" ) {
  console.log("pode entrar, e pode dirigir")
 } else         {
        console.log("Pode entrar, mas nao pode dirigir")
  };      