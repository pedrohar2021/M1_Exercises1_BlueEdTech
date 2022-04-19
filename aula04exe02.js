console.clear();
const prompt = require('prompt-sync')();

/* Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número
inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo
computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.*/

let numeroAleatorio = Math.floor(Math.random() * 11)
//console.log(numeroAleatorio);
console.log('O programa gerou um número entre 0 e 10. Adivinhe qual é esse número.');

let resposta = prompt('Qual é o seu palpite? ')

if (resposta == numeroAleatorio){
    console.log('Você Venceu!');
}else{
    console.log('Você Perdeu!');
}

console.log(`O programa escolheu ${numeroAleatorio}`);