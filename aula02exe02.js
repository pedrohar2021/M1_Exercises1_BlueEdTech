console.clear();
const prompt = require('prompt-sync')();

/*2) Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha,
 seu endereço na segunda, o CEP na terceira e o telefone na quarta. */

 let nome = prompt('Qual seu nome completo: ')
 let endereco = prompt('Qual seu endereço? ')
 let cep = prompt('Qual o seu CEP? ')
 let telefone = prompt('Qual seu telefone? ')

 console.log(`Nome: ${nome}
 Endereço: ${endereco}
 Cep: ${cep}
 Telefone ${telefone}`);