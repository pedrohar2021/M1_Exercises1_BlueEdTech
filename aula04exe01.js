console.clear();
const prompt = require('prompt-sync')();

/* Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 
Salários até R$ 280,00 (incluindo): aumento de 20%. 
Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
Salários de R$ 1500,00 em diante: aumento de 5%.
Após o aumento ser realizado, informe na tela:
O salário antes do reajuste.
O percentual de aumento aplicado.
O valor do aumento.
O novo salário, após o aumento */

console.log('As empresas @.com resolveram dar um aumento de salário aos seus colaboradores:');
console.log();
let salario = +prompt('Qual o atual valor do seu salário? R$')
let percentual

if (salario <= 280){
    percentual = 20
} else if (salario <= 700){
    percentual = 15
} else if (salario <= 1500 ){
    percentual = 10
}else{
    percentual = 5
}

console.log(`Atual salário é: R$${salario}.`);
console.log(`O porcentual aplicado é de ${percentual}%.`);

percentual = percentual / 100
let aumento = percentual * salario
let novosalario = salario + aumento

console.log(`Teve um aumento no salario de: R$${aumento}.`);
console.log(`Seu novo salário é de: R$${novosalario}.`);