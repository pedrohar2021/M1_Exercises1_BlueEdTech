console.clear();
const prompt = require('prompt-sync')();

/* 8) Qual o valor do troco? - Crie um programa que calcule o troco de uma compra no valor
de R$100,98 e que foi paga com R$150,00. O valor do troco deve ser exibido no console. */

let valorDaCompra = parseFloat(prompt('Qual o valor da compra? R$'))
let valorPago = parseFloat(prompt('Vai pagar com quantos reais? R$'))
let valorTroco = valorPago - valorDaCompra
console.log(`Você receberá um troco de R$ ${valorTroco.toFixed(2)}`);