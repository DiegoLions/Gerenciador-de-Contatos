const prompt = require('prompt-sync')();

function atualizarContato(mainMenu, contatos) {
    if (contatos.length === 0) {
        console.log('Nenhum contato cadastrado no gerenciador. Primeiro, adicione um contato para poder editá-lo.');
        console.log('\nPressione Enter para voltar ao menu...');
        prompt();
        return mainMenu(contatos);
    }

    console.log('\n=== CONTATOS SALVOS NO GERENCIADOR ===');
    contatos.forEach((contato, index) => {
        console.log(
            `${index + 1}. Nome: ${contato.nome} | Telefone: ${contato.telefone} | Email: ${contato.email} | ID: ${contato.id}`
        );
    });

    let id;
    let contatoParaAtualizar;

    while (true) {
        id = prompt('Digite o número do ID do contato que deseja atualizar: ');
        const numericId = parseInt(id);

        if (isNaN(numericId)) {
            console.log("ID inválido. Por favor, digite um número.");
            continue;
        }
        contatoParaAtualizar = contatos.find(c => c.id === numericId);

        if (!contatoParaAtualizar) {
            console.log(`Não foi encontrado um contato com o ID ${numericId}. Por favor, tente novamente.`);
        } else {
            break;
        }
    }

   
    const novoNome = prompt('Digite o novo nome do contato: ');
    contatoParaAtualizar.nome = novoNome;

    let novoTelefone;
    while (true) {
        novoTelefone = prompt('Digite o novo telefone do contato: ');
        if (isNaN(parseInt(novoTelefone)) || novoTelefone.trim() === '') {
            console.log("Telefone inválido. Por favor, digite apenas números.");
        } else {
            contatoParaAtualizar.telefone = novoTelefone;
            break;
        }
    }
    
    const novoEmail = prompt('Digite o novo e-mail do contato: ');
    contatoParaAtualizar.email = novoEmail;

    console.log("Contato atualizado com sucesso!");

    const atualizarNovoContato = prompt("Deseja atualizar outro contato? (s/n) ");
    if (atualizarNovoContato.toLowerCase() === 's') {
        return atualizarContato(mainMenu, contatos);
    } else {
        return mainMenu(contatos);
    }
}

module.exports = atualizarContato;
