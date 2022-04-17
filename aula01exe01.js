console.clear();
const prompt = require('prompt-sync')();
 
/* Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e 
informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6.
 Ex: nota a * 4 e nota b * 6. */

nota1 = prompt('Digite a primeira nota: ')
nota2 = prompt('Digite a segunta nota:? ')
nota1total= nota1 * 4
nota2total= nota2 * 6
total = nota1total + nota2total
media = total / 10
console.log(`A nota média do aluno é ${media}`);
