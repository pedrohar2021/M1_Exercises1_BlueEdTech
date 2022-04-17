console.clear();
const prompt = require('prompt-sync')();

/* Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa
em dias e informe-a em anos, meses e dias.Também considere todo ano com 365 dias e todo
mês com 30 dias. */

let nome = prompt('Qual o seu nome? ').toUpperCase()
let idadeEmDias = +prompt('Quantos dias você ja viveu? ')
let anos = Math.floor(idadeEmDias / 365);
let meses = Math.floor((idadeEmDias % 365) / 30);
let dias = (idadeEmDias % 365) % 30;
console.log();
console.log(`${nome} você tem ${anos} anos, ${meses} meses e ${dias} dias.`);