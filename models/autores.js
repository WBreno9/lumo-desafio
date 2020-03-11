import pg from './db';

async function getAutores() {
  return pg('autores').select();
}

async function getAutoresByNome(nomeAutor) {
  return pg('autores').first().where({ "nomeAutor": nomeAutor });
}

async function getAutorProposicoes(idAutor) {
  return pg('proposicoes')
    .select()
    .leftJoin('autorias', 'proposicoes.id', '=', 'autorias.idProposicao')
    .where({ "autorias.idAutor": idAutor });
}

export default {
  getAutores,
  getAutoresByNome,
  getAutorProposicoes
};