console.clear();
const prompt = require('prompt-sync')();

/* 1) Frase na tela - Implemente um programa que escreve na tela a frase 
"O primeiro programa a gente nunca esquece!". */

let nome = prompt('Qual seu nome? ')
console.log(`Fala ${nome}, o primeiro programa a gente nunca esquece!`);