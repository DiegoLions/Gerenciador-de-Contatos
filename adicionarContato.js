const prompt = require('prompt-sync')()
function adicionarContato (mainMenu, contatos) {
const nome = prompt('Nome: ');
const telefone = prompt('Telefone: ');
const email = prompt('Email: ');
const id = prompt('Digite um número para o ID do contato: ')
    
    if(isNaN(id) || id.trim() === '') {
        console.log("ID inválido. Por favor, digite um número.");
        return adicionarContato();
    }
    if(contatos.some(t => t.id === id)) {
        console.log(`Já existe um contato com o ID ${id}. Por favor, escolha outro ID.`);
        return adicionarContato();
    }
const adicionarNovoContato = prompt("Deseja adicionar um novo contato? (s/n)")
    if(adicionarNovoContato.toLowerCase() =='s'){
        adicionarContato();
    } else{
        const contato = { 
            nome: nome,
            telefone: telefone,
            email: email,
            id: id,
        }
        contatos.push(contato)
        console.log('Contato adicionado com sucesso!');
        mainMenu();
    };
    };
module.exports = adicionarContato;
