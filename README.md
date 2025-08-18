# Gerenciador-de-Contatos - Diego Enrique da Silva (Atividade avaliativa)

Parte 3: Perguntas Descritivas
1. Análise de Código: Explique com suas palavras o que faz cada parte do programa original fornecido na Parte 1.
  R: Inicialmente, ṕasso a descrever, brevemente, a forma de como o programa funciona: o programa é um gerenciador de contatos, construído em JavaScript.     Ele trabalha com um array de contatos e um menu principal que permite a interação com o usuário. A lógica principal é a seguinte:
  Menu Principal (mainMenu): Essa é a "central de comando", onde todas as possibilidades de interação do usuário são exibidas. Ela exibe as opções            (adicionar contato, listar contatos, atualizar contatos, remover contatos e sair) e espera a escolha do usuário. Dependendo da opção, ela chama a função    correspondente.
  Funções do Gerenciador de Contatos: Cada função (adicionarContato, listarContatos, atualizarContato, removerContato) realiza uma única tarefa.
    Adicionar Contato: Solicita as informações de um novo contato (nome,telefone, endereço de e-mail e o ID escolhido para esse contato) e o adiciona à lista,armazenando as informações que foram solicitadas anteriormente, ou seja, nome, telefone, endereço de e-mail e o ID. É possível ainda, com o mesmo cósigo da função "Adicionar Contato", adicionar um novo contato, após ter adicionado o primeiro contato.
   Listar Contatos: Essa função é relativamente bem simples, ela exibe na tela para o usuário os contatos que estão salvos no gerenciador, os que existiam inicialmente no array de contatos, no caso desse exercícios e os que foram adicionados por meio da opção de "Adicionar Contato". Exibe na forma de lista, contendo os seguintes dados: ID, nome, telefone e endereço de e-mail.
   Atualizar Contato: Essa função serve para alterar os dados de um contato salvo no gerenciador pelos novos dados que o usuário fornecer. Ex: Atualiza, altera, os dados do contato "João" (nome, telefone, e-mail e ID) para os dados do contato "Maria", contendo suas novas informações (nome, telefone, e-mail e ID).
   Remover Contato: A função também é bastante simples, serve para remover, ou seja, apagar, excluir, 1 contato da lista salva no gerenciador de contatos. Solicita, para a exclusão, que o usuário informe o ID correspondente ao contato que deseja remover. Tendo informado o ID para exclusão, a função irá apagar esse contato, que não será mais exibido na lista de contatos.
  De forma resumida:
   Estrutura de Dados: O programa usa um array chamado contatos para guardar as informações. Cada contato é um objeto com propriedades como id, nome, telefone e email.
   Interação com o Usuário: A função prompt é usada para receber as entradas do usuário, como a opção do menu ou os dados de um novo contato. A função console.log é usada para exibir mensagens na tela, seja o menu, a lista de contatos ou mensagens de sucesso/erro, por exemplo.





2. Entradas e Saídas: Identifique quais partes do código podem ser consideradas entradas e quais são saídas.
  R: No programa, a interação com o usuário define o que é entrada e o que é saída. Vejamos:
    Entradas:
        A opção do menu que o usuário escolhe (ex: '1', '2', '3', '4', '5');
        Os dados do contato que o usuário insere (nome, telefone, email e ID) seja para adicionar um contato ou mesmo para atualizá-lo.
        O ID do contato que o usuário digita para adicionar, atualizar ou remover.
        A confirmação do usuário para continuar alguma ação (ex: 's' para sim).
    Saídas:
        O menu principal exibido na tela.
        A lista de contatos exibida na tela.
        As mensagens de confirmação (exs: "Contato removido com sucesso!" e "Saindo do Gerenciador de Contatos. Obrigado por utilizá-lo! Até logo!")
        As mensagens de erro (exs: "Opção inválida!" e "Nenhum contato cadastrado no gerenciador. Primeiro, adicione um contato para poder removê-lo.")
        Instruções de navegação: As mensagens como "Pressione Enter para voltar ao menu..." são saídas que guiam o usuário através da navegação do programa.


3. Variáveis Declaradas: Liste todas as variáveis declaradas no código e explique seu propósito.
  R: Lista das variáveis e para que cada uma serve:
    listarContatos, adicionarContato, atualizarContato, removerContato: São constantes que armazenam as funções importadas de outros arquivos. Elas servem para organizar o código em módulos;
    Contatos: É um array que armazena todos os objetos, dados, de contato. É a principal estrutura de dados do programa;
    mainMenu: É uma função que define e executa a lógica do menu principal, gerenciando a navegação do usuário;
    opcao: É uma variável que armazena a escolha do usuário no menu principal;
    ID: É uma variável usada dentro de funções como removerContato para guardar o ID que o usuário digita;
    contatoParaRemover ou contatoParaAtualizar: São variáveis que armazenam o objeto do contato encontrado na lista, antes de ser alterado ou         removido.
    indexParaRemover: É uma variável que guarda a posição (o índice) do contato que será removido, o que é essencial para usar o método splice(). Já que é a partir da posição que o contato ocupa que ele será removido ou atualizado.
    numericId: Esta variável é declarada dentro das funções que precisam de um ID (como removerContato e atualizarContato). Ela armazena a versão numérica do ID que o usuário digitou, garantindo que o valor seja um número inteiro e possa ser comparado com o ID dos contatos no array.
    novoNome, novoTelefone, novoEmail: Essas variáveis são usadas na função atualizarContato para armazenar os novos dados que o usuário deseja usar para substituir as informações antigas de um contato.
    novoContato: Esta variável é criada na função adicionarContato e é usada para temporariamente guardar o novo objeto de contato (com id, nome, telefone e e-mail) antes de ser adicionado ao array contatos.
    removerNovoContato: Uma variável booleana (verdadeiro ou falso) usada na função removerContato para armazenar a resposta do usuário, se ele deseja ou não remover outro contato.
