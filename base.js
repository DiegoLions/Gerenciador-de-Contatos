const prompt = require('prompt-sync')();
const listarContatos = require('./listarContatos');
const adicionarContato = require('./adicionarContato');
const atualizarContato = require('./atualizarContato');
const removerContato = require('./removerContato');
const contatos = []

function mainMenu(){
console.log(`
    \n<<<GERENCIADOR DE CONTATOS>>>
1. Adicionar contato
2. Listar contatos
3. Atualizar contato
4. Remover contato
5. Sair do Gerenciador de Contatos
`);
const opcao = prompt('Escolha uma opção: ');
switch (opcao) {
case '1':
adicionarContato(mainMenu, contatos);
mainMenu()
break;
case '2':
listarContatos(mainMenu, contatos);
break;
case '3':
atualizarContato(mainMenu, contatos);
break;
case '4':
removerContato(mainMenu, contatos);
break;
case '5':
break;
default:
console.log('Opção inválida!');
}}
mainMenu();

