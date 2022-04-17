console.clear();
const prompt = require('prompt-sync')();

/* 4) Tabela de notas - Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos. Como primeiro passo, escreva um programa que produza a seguinte saída:
ALUNO (A)            NOTA
ALINE                9.0
MÁRI0                DEZ
SÉRGIO               4.5
SHIRLEY              7.0 */

aluno1 = prompt('Nome do 1º aluno: ')
nota1= parseFloat(prompt(`Nota do(a) ${aluno1}: `))
aluno2 = prompt('Nome do 2º aluno: ')
nota2= parseFloat(prompt(`Nota do(a) ${aluno2}: `))
aluno3 = prompt('Nome do 3º aluno: ')
nota3= parseFloat(prompt(`Nota do(a) ${aluno3}: `))
aluno4 = prompt('Nome do 4º aluno: ')
nota4= parseFloat(prompt(`Nota do(a) ${aluno3}: `))

console.log(`ALUNO(A) | NOTA
${aluno1} | ${nota1}
${aluno2} | ${nota2}
${aluno3} | ${nota3}
${aluno4} | ${nota4}`);

