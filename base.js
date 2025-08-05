const prompt = require('prompt-sync')();
const listarContatos = require('./listarContatos');
const adicionarContato = require('./adicionarContato');
const atualizarContato = require('./atualizarContato');
const removerContato = require('./removerContato');
const contatos = require('./contatos');

function mainMenu() {
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
const nome = prompt('Nome: ');
const telefone = prompt('Telefone: ');
const email = prompt('Email: ');
const id = prompt('Digite um número para o ID do contato: ', (idInput) => {
    const id = parseInt(idInput, 10);
    if (isNaN(id) || idInput.trim() === '') {
        console.log("ID inválido. Por favor, digite um número.");
        return adicionarContato();
    }
    if (contatos.some(t => t.id === id)) {
        console.log(`Já existe um torneio com o ID ${id}. Por favor, escolha outro ID.`);
        return adicionarTorneio();
    }
})

adicionarContato({ id, nome, telefone, email });
console.log('Contato adicionado com sucesso!');
mainMenu();
break;
case '2':
listarContatos();
mainMenu();
break;
case '3':
const idAtualizar = parseInt(prompt('ID do contato a atualizar:'));
const novoNome = prompt('Novo nome: ');
const novoTelefone = prompt('Novo telefone: ');
const novoEmail = prompt('Novo email: ');

atualizarContato({nome: novoNome, telefone:
novoTelefone, email: novoEmail, ID: idAtualizar});
console.log('Contato atualizado com sucesso! Redirecionando ao menu principal...');

mainMenu();
break;
case '4':
const idRemover = parseInt(prompt('ID do contato a remover: '));
removerContato(idRemover);
console.log('Contato removido com sucesso!');
mainMenu();
break;
case '5':
break;
default:
console.log('Opção inválida!');
mainMenu();
}
}
mainMenu();
