console.clear();
const prompt = require('prompt-sync')();

/* Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual
ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. */
 
let nomeUsuario = prompt('Digite um nome de usúario valido: @').toLowerCase()
console.log();
console.log(`Olá @${nomeUsuario} vamos definir uma senha?`);
console.log();
let senha = prompt('Digite sua senha: ').toLowerCase()

while (senha === nomeUsuario){
    console.log();
    console.log('Senha inválida\n\nNão pode ser igual ao nome do seu usuário.');
    senha = prompt('Digite outra: ').toLowerCase()
}

console.log(`CONTA CRIADA!
login: @${nomeUsuario}
senha: ${senha}`);