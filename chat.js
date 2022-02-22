

const input = require("readline-sync");

console.log("Seja bem vindo(a) Ao Auto Cart! Vamos fazer seu login")

const idade = input.question("Insira sua idade:") 
const carteira = input.question("Voce tem habilitacao? Digite sim ou nao: ") 

if (idade>= 18 && carteira === "sim" ) {
  console.log("Aproveite e boa corrida")
 } else if (idade>=18 && carteira === "nao" )  {
        console.log("Divirta-se, mas voce não tem autorizacao para dirigir")
} else if (idade<18 && carteira === "nao" ) {
    console.log("Divirta-se, mas voce não tem autorizacao para dirigir")
   } else {
      console.log("Voce nao digitou uma opcao valida")
  };