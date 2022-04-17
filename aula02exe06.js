console.clear();
const prompt = require('prompt-sync')();

/* 6) Calculadora de Dano - Escreva um programa que receba dois valores digitados
pelo usuário: quantidade de vida de um monstro (entre 10 e 50) e valor do ataque
do jogador por turno (entre 5 e 10). Baseado nos valores digitados, exiba a quantidade
de turnos que o jogador irá demorar para conseguir derrotar o monstro (o jogador 
irá derrotar o monstro em 8 turnos). */

let vidaMostro = +prompt('Digite a quantidade de vida do monstro (entre e 50): ');
let danoJogador = +prompt('Dogote o valor do ataque do jogador (entre 5 e 10): ');
let turnos = Math.ceil(vidaMostro / danoJogador);
console.log(`O jogador irá derrotar o monstro em ${turnos} turnos.`);