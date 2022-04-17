console.clear();
const prompt = require('prompt-sync')();

/* 9) Conversor de moedas - Crie um programa que solicite um um valor em real ao usuário
 e converta esse valor, para dólar. */

 console.log('<<---- CASA DA MOEDA ---->');
 console.log('<<------ conversão ------>');
let valorUsuario = prompt('Quantos reais deseja converter? R$ ')
let valorDolar = valorUsuario / 4.7
console.log(`Você vai receber $ ${valorDolar.toFixed(2)} doláres. `);