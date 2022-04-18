console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa para a leitura de quatro notas parciais de um aluno.
O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Em recuperação", se a média for entre cinco e sete;
A mensagem "Reprovado", se a média for menor que cinco. */

let nota1 = parseFloat(prompt('Qual sua nota em Geografia? (0 a 10): '))
let nota2 = parseFloat(prompt('Qual sua nota em História? (0 a 10): '))
let nota3 = parseFloat(prompt('Qual sua nota em Portugês? (0 a 10): '))
let nota4 = parseFloat(prompt('Qual sua nota em Matemática? (0 a 10): '))

let notas = nota1 + nota2 + nota3 + nota4
let media = notas / 4
console.log('-----------------------');
console.log(`Sua média foi ${media}.`);
console.log('-----------------------');

if (media >= 7){
    console.log('Você foi aprovado!');
}else if (media >= 5 || media < 7){
    console.log('Você está de recuperação!');
}else if (media < 5){
    console.log('Você foi reprovado!');
}