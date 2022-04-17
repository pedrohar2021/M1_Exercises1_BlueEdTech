console.clear();
const prompt = require('prompt-sync')();

/* Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. 
Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa
já viveu. Obs: considere todo ano com 365 dias e todo mês com 30 dias */

console.log('<<--- CALCULADORA DE IDADE --->');
let nome = prompt('Qual o seu nome? ').toUpperCase()

console.log(`Vamos lá ${nome}, coloque abaixo quantos anos, meses e dias de idade você tem:`);
let anos = +prompt('Quantidade de anos: ')
let meses = +prompt('Quantidade de meses: ')
let dias = +prompt('Quantidade de dias: ')
console.log(`${nome} você tem: ${anos} anos, ${meses} meses e ${dias} dias.`)
let totalMeses = meses * 30
let totalAnos = anos * 365
let totalDias = dias + totalMeses + totalAnos
console.log('APERTE ENTER PARA VER QUANTOS DIAS VOCÊ JÁ VIVEU.');
prompt()
console.log(`Você já viveu ${totalDias} dias.`);
