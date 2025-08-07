function removerContato(contatos, id, mainMenu) {
const index = contatos.findIndex(contato => contato.id === id);
if (index !== -1) {
contatos.splice(index, 1);
}
}
module.exports = removerContato;

