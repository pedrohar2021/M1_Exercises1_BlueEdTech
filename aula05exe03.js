console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que peça um número par, e repita a execução caso o número digitado
seja ímpar.*/

let numero = +prompt('Digite um número par: ')
while( numero % 2 == 1){
    console.log('Invalido.');
    numero = +prompt('Digite um número par: ')
}
console.log(`Você digitou o número: ${numero}`);