import pg from './db';

async function getProposicoes() {
  return pg('proposicoes').select();
}

async function getProposicoesByDescricao(descricaoTipo) {
  return pg('proposicoes').select().where({ "descricaoTipo": descricaoTipo });
}

async function getProposicaoAutores(idProposicao) {
  return pg('autores')
    .select()
    .leftJoin('autorias', 'autores.idAutor', '=', 'autorias.idAutor')
    .where({ "autorias.idProposicao": idProposicao });
}

export default {
  getProposicoes,
  getProposicoesByDescricao,
  getProposicaoAutores
};