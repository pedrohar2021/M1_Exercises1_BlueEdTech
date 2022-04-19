console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 100;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd'; */

let nome = prompt('Digite seu nome: ');
while (nome.length <= 3){
    console.log('Digite mais de 3 caracteres no seu nome.')
    nome = prompt('Digite seu nome: ');
    console.log();
}

let idade = prompt(`Qual a sua idade ${nome}? `)
while (idade <= 0 || idade > 100){
    console.log("Entre 0 e 100 anos.");
    idade = prompt(`Qual a sua idade ${nome}? `)
    console.log();
}

let salario = prompt(`Qual seu salário ${nome}? `)
while (salario == 0){
    console.log('Digite um salário superior a zero.');
    salario = prompt(`Qual seu salário ${nome}? `)
    console.log();
}

console.log
(`[1] - Solteiro(a) 
[2] - Casado(a)
[3] - Divorciado(a)
[4] - Viuvo(a)`);
let estadoCivil = prompt(`Qual seu estado civil ${nome}? `)
while (estadoCivil <= 0 || estadoCivil >= 5){
    console.log('Invalido.');
    console.log(`[1] - Solteiro(a) 
[2] - Casado(a)
[3] - Divorciado(a)
[4] - Viuvo(a)`);
    estadoCivil = prompt(`Qual seu estado civil ${nome}? `)}

if (estadoCivil == 1){
    estadoCivil = 'Solteiro(a)'
} else if (estadoCivil == 2){
    estadoCivil = 'Casado(a)'
} else if (estadoCivil == 3){
    estadoCivil = 'Divorciado(a)'
 }else{
    estadoCivil= 'Viúvo(a)'
}

console.log();
console.log(`${nome}, você tem ${idade} anos, tem um salário de R$${salario}.00, e seu estado civíl é ${estadoCivil}.`);
