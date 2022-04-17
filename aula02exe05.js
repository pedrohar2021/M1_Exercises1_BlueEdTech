console.clear();
const prompt = require('prompt-sync')();
 
/* 5) Faça um programa de cadastro de clientes que mostre um menu de opções e permita
com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida. */

primeiraOpcao = 'Batata Frita'
segundaOpcao = 'Hamburguer'
terceiraOpcao = 'Pizza'
quartaOpcao = 'Sushi'
console.log(`RESTAURANTE JS, SEJA BEM VINDO!
AS OPÇÕES DE BUFFET SÃO:
1 - ${primeiraOpcao}
2 - ${segundaOpcao}
3 - ${terceiraOpcao}
4 - ${quartaOpcao}`);

let escolhaCliente = +prompt('Qual opção você prefere? ')
if (escolhaCliente == 1){
    console.log(`Você escolheu ${primeiraOpcao}.`);
}else if (escolhaCliente == 2){
    console.log(`Você escolheu ${segundaOpcao}.`);
}else if (escolhaCliente == 3){
    console.log(`Você escolheu ${terceiraOpcao}.`);
}else if (escolhaCliente == 4){
    console.log(`Você escolheu ${quartaOpcao}.`);
}else{
    console.log('Não temos essa opção!');
}