const prompt = require('prompt-sync')();
function adicionarContato(mainMenu, contatos) {
    const nome = prompt('Nome: ');
    let telefone;
    while (true) {
        telefone = prompt('Telefone: ');
        if (isNaN(telefone) || telefone.trim() === '') {
            console.log("Telefone inválido. Por favor, digite apenas números.");
        } else {
            break;
        }
    }
    const email = prompt('Email: ');
    let id;
    let numericId;
    while (true) {
        id = prompt('Digite um número para o ID do contato: ');
        numericId = parseInt(id);
        if (isNaN(numericId)) {
            console.log("ID inválido. Por favor, digite um número.");
        } else if (contatos.some(t => t.id === numericId)) {
            console.log(`Já existe um contato com o ID ${numericId}. Por favor, escolha outro ID.`);
        } else {
            break;
        }
    }
    const novoContato = {
        nome: nome,
        telefone: telefone,
        email: email,
        id: numericId,
    };
    contatos.push(novoContato);
    console.log('Contato adicionado com sucesso!');

    const adicionarNovoContato = prompt("Deseja adicionar um novo contato? (s/n) ");
    if (adicionarNovoContato.toLowerCase() === 's') {
        return adicionarContato(mainMenu, contatos);
    } else {
        mainMenu(contatos);
    }
}
module.exports = adicionarContato;
