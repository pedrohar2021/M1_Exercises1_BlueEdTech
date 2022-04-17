console.clear();
const prompt = require('prompt-sync')();

/* 7) E os 10% do garçom? - Defina uma variável para o valor de uma refeição que custou
R$ 42,54. Na sequência, defina uma variável para o valor da taxa de serviço que é de 10%.
Por fim defina uma variável que será responsável pelo cálculo do valor total da conta e 
exiba-o no console com a seguinte formatação: R$99.99 (valor com duas casas decimais). */

let valorRefeicao = parseFloat(prompt('Quanto custou a refeição?'))
let valorGarcom = valorRefeicao / 10
let totalConta = valorGarcom + valorRefeicao
console.log(`O valor total da conta com a taxa de serviço é R$ ${totalConta.toFixed(2)}`);
