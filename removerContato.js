const prompt = require('prompt-sync')();

function removerContato(mainMenu, contatos) {
    if (contatos.length === 0) {
        console.log('Nenhum contato cadastrado no gerenciador. Primeiro, adicione um contato para poder removê-lo.');
        console.log('\nPressione Enter para voltar ao menu...');
        prompt();
        return mainMenu(contatos);
    }
  
    console.log('\n=== CONTATOS DISPONÍVEIS PARA REMOÇÃO ===');
    contatos.forEach((contato, index) => {
        console.log(
            `${index + 1}. Nome: ${contato.nome} | Telefone: ${contato.telefone} | Email: ${contato.email} | ID: ${contato.id}`
        );
    });

    let id;
    let indexParaRemover;

    while (true) {
        id = prompt('Digite o número do ID do contato que deseja remover: ');
        const numericId = parseInt(id);

        if (isNaN(numericId)) {
            console.log("ID inválido. Por favor, digite um número.");
            continue;
        }
        
     
        indexParaRemover = contatos.findIndex(c => c.id === numericId);

        if (indexParaRemover === -1) {
            console.log(`Não foi encontrado um contato com o ID ${numericId}. Por favor, tente novamente.`);
        } else {
            break;
        }
    }

    
    contatos.splice(indexParaRemover, 1);

    console.log("Contato removido com sucesso!");

    const removerNovoContato = prompt("Deseja remover outro contato? (s/n) ");
    if (removerNovoContato.toLowerCase() === 's') {
        return removerContato(mainMenu, contatos);
    } else {
        return mainMenu(contatos);
    }
}

module.exports = removerContato;
