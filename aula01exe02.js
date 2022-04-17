console.clear();
const prompt = require('prompt-sync')();

/* Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, 
o número de peças1 que o usuário quer, o valor unitário de cada peça1,
o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2.
 Após, calcule e mostre o valor a ser pago. */

let produto1 = prompt('Qual o nome do 1º produto? ')
let quantidade1 = prompt('Qual a quantidade do 1º produto? ')
let valor1 = prompt('Qual o valor do 1º produto? R$')
let produto2 = prompt('Qual o nome do 2º produto? ')
let quantidade2 = prompt('Qual a quantidade do 2º produto? ')
let valor2 = prompt('Qual o valor do 2º produto? R$')

let pagamento = (valor1 * quantidade1)+ (valor2 * quantidade2)

console.log(`Na compra dos produtos:
prod(${produto1}) | qt(${quantidade1})
prod(${produto2}) | qt(${quantidade2})
Você deverá pagar: ${pagamento} reais.`)