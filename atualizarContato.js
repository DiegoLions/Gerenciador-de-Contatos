let contatos = require('./contatos');
function atualizarContato(nome, telefone, email, id, novoContato) {
const index = contatos.findIndex(contato => contato.id === id);
if (index !== -1) {
contatos[index] = {nome, telefone, email, id, novoContato};
}
}
module.exports = atualizarContato;
