console.clear();
const prompt = require('prompt-sync')();

/* Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro
entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador.
O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o 
número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário 
encontrou o número, e mostrar a quantidade de palpites que foi necessária. */

console.log('Sou seu computador... Acabei de pensar em um número entre 0 e 10.')
console.log('Será que você consegue adivinhar qual foi: ')
let computador = Math.floor(Math.random() * 11)
let usuario = +prompt('Em qual número pensei? ')
let palpites = 0
let acertou = false

while (computador != usuario){
    palpites++
    if( usuario < computador){
        console.log('ERROU! Tente novamente...');
        usuario = +prompt('É maior... Em qual número pensei? ')
    }else if ( usuario > computador){
        console.log('ERROU! Tente novamente...');
        usuario = +prompt('É menor... Em qual número pensei? ') 
    }
}

if(computador == usuario){
    acertou = true
    console.log('ACERTOU! Parabéns...'); 
    }

console.log(`Acertou com ${palpites+1} tentativas.`);

