const input = require('readline-sync')

const n1 = input.question('Insira sua nota 1')
const n2 = input.question('Insira sua nota 2')

var media = ((n1+n2) / 2) ;
console.log(`sua media ${media}`)
    
    