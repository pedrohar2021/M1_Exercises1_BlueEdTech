console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos:
Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
Se A² = B² + C² , apresente a mensagem: TRIANGULO RETANGULO;
Se A² > B² + C² , apresente a mensagem: TRIANGULO OBTUSANGULO;
Se A² < B² + C² , apresente a mensagem: TRIANGULO ACUTANGULO;
Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES; */

let valores = [
parseInt(prompt('Digite o 1º valor do triangulo: ')),
parseInt(prompt('Digite o 2º valor do triangulo: ')),
parseInt(prompt('Digite o 3º valor do triangulo: '))
].sort().reverse()

console.log(`
VALOR (A): ${valores[0]}
VALOR (B): ${valores[1]}
VALOR (C): ${valores[2]}
`)

if (valores[0] >= (valores[1] + valores[2])){
    console.log('NAO FORMA TRIANGULO');
}else if(valores[0] ** 2 == (valores[1]**2 + valores[2]**2)){
    console.log('FORMA UM TRIANGULO RETANGULO');
}else if(valores[0] ** 2 > (valores[1]**2 + valores[2]**2)){
    console.log('FORMA UM TRIANGULO OBTUSANGULO');
}else if(valores[0] ** 2 < (valores[1]**2 + valores[2]**2)){
    console.log('FORMA UM TRIANGULO ACUTANGULO');
}else if(valores[0] == valores[1] && valores[0] == valores[2]){
    console.log('FORMA UM TRIANGULO EQUILATERO;');
}else if(valores[0] == valores[1] || valores[0] == valores[2] || valores[1] == valores[2]){
    console.log('FORMA UM TRIANGULO ISOSCELES');
}