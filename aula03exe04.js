console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar
uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são
múltiplos entre si. */

let n1 = parseInt(prompt('Digite o 1º numero: '));
let n2 = parseInt(prompt('Digite o 2º numero: '));


if(n1>n2 || n1 == n2) {
    let resultado = n1/n2;
    if(Number.isInteger(resultado)){
    console.log('Os números são múltiplos');
    }else{
    console.log('Os números não são múltiplos');
    };
}else {
    let resultado = n2/n1;
    if(Number.isInteger(resultado)){
    console.log('Os números são múltiplos');
    }else{
    console.log('Os números não são múltiplos');
    };
    };