const input = require('readline-sync')

const Cardapio = [
    {cod: '1', lanche: 'cachorro quente', preco: '4.00'},
    {cod: '2', lanche: 'Xsalada', preco: '4.50'},
    {cod: '3', lanche: 'Xbacon', preco: '5.00'},
    {cod: '4', lanche: 'torrada simples', preco: '2.00'},
    {cod: '5', lanche: 'Refrigerante', preco: '1.50'}, 
]
    const cod1 = 4.00
    const cod2 = 4.50
    const cod3 = 5.00
    const cod4 = 2.00
    const cod5 = 1.50
    
    cod1.toFixed(2)
    
 console.log(Cardapio)
    
 const codlanche = input.question('Insira o numero do seu lanche: cod1, cod2, cod3, cod4 ou cod5: ') 
 const quant = input.question('Insira a quantidade desejada:  ') 

 if (codlanche == "cod1") {
          console.log("Voce pediu: ", + quant + "  " + Cardapio [0].lanche);
          console.log("Sua conta deu: ", (cod1.toFixed(2))*quant)
    } 
 
    if (codlanche == "cod2") {
        console.log("Voce pediu: ", + quant + "  " + Cardapio [1].lanche);
        console.log("Sua conta deu:  ", Cardapio [1].preco*quant);
  }    

  if (codlanche == "cod3") {
    console.log("Voce pediu: ", + quant + "  " + Cardapio [2].lanche);
    console.log("Sua conta deu:  ", Cardapio [2].preco*quant);
} 

if (codlanche == "cod4") {
    console.log("Voce pediu: ", + quant + "  " + Cardapio [3].lanche);
    console.log("Sua conta deu:  ", Cardapio [3].preco*quant);
} 

if (codlanche == "cod5") {
    console.log("Voce pediu: ", + quant + "  " + Cardapio [4].lanche);
    console.log("Sua conta deu:  ", Cardapio [4].preco*quant);
}  



//total = parseFloat(codlanche) * quant

//console.log("Sua conta deu: ", total)
   