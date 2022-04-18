console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que leia um número, e informe se ele é par ou impar. */

console.log('<<<- PAR OU IMPAR ->>>');
let numero = +prompt('Digite um número: ')
console.log('----------------------');
if (numero % 2 == 0){
    console.log(`O número ${numero} é par!`);
}else{
    console.log(`O número ${numero} número é impar!`);
}