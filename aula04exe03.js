console.clear();
const prompt = require('prompt-sync')();

/* Caixa Eletrônico - Faça um Programa para um caixa eletrônico. O programa deverá perguntar
ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas.
As notas disponíveis serão as de  5, 10, 20, 50, 100 e 200 reais. O valor mínimo é de 10 reais e
o máximo de 1000 reais.O programa não deve se preocupar com a quantidade de notas existentes
na máquina. 

Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, 
uma nota de 50, uma nota de 5 e uma nota de 1.
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100,
uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1. */

let valorSaque = +prompt('Digite o valor a ser sacado: (Entre R$10 e R$1.000) R$')

let notas200 = Math.floor(valorSaque / 200)
valorSaque = valorSaque % 200
let notas100 = Math.floor(valorSaque / 100)
valorSaque = valorSaque % 100
let notas50 = Math.floor(valorSaque / 50)
valorSaque = valorSaque % 50
let notas20 = Math.floor(valorSaque / 20)
valorSaque = valorSaque % 20
let notas10 = Math.floor(valorSaque / 10)
valorSaque = valorSaque % 10
let notas5 = Math.floor(valorSaque / 5)
valorSaque = valorSaque % 5

console.log();

console.log(`${notas200} notas de R$200,00`);
console.log(`${notas100} notas de R$100,00`);
console.log(`${notas50} notas de R$50,00`);
console.log(`${notas20} notas de R$20,00`);
console.log(`${notas10} notas de R$10,00`);
console.log(`${notas5} notas de R$5,00`);