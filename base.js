const prompt = require('prompt-sync')();
const listarContatos = require('./listarContatos');
const adicionarContato = require('./adicionarContato');
const atualizarContato = require('./atualizarContato');
const removerContato = require('./removerContato');

const contatos = [
    { id: 1, nome: 'Alice', telefone: '1234-5678', email:
    'alice@example.com' },
    { id: 2, nome: 'Bob', telefone: '8765-4321', email:
    'bob@example.com' },
    { id: 3, nome: 'Carol', telefone: '5678-1234', email:
    'carol@example.com' }
    ];
function mainMenu(contatos){
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
console.log('Saindo do Gerenciador de Contatos. Obrigado por utilizá-lo! Até logo!');
return; 
default:
console.log('Opção inválida!');
}}
mainMenu(contatos);
