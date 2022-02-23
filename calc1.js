const input = require('readline-sync')

const n1 = parseFloat(input.question('Insira sua nota 1:  '))
const n2 = parseFloat(input.question('Insira sua nota 2:  '))
const n3 = parseFloat(input.question('Insira sua nota 3:  '))
const n4 = parseFloat(input.question('Insira sua nota 4:  '))
const n5 = parseFloat(input.question('Insira sua nota 5:  '))

var media = ((n1+n2+n3+n4+n5) / 5) ;
   

console.log(`sua média é ${media}`)
if (media <=6.9) {
     console.log ("Reprovado")

}else if  (media >=7.0) {
console.log ("Aprovado")
}