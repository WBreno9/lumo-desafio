import pg from './models/db';
import proposicoes from './data';

let autores = function () {
  let autores_id = [];

  return Array.from(proposicoes, (prop) => {
    let autor;
    for (autor of prop.autores) {
      if (autores_id.indexOf(autor.idAutor) === -1) {
        autores_id.push(autor.idAutor);
        return autor;
      } 
    }
  }).filter((autor) => autor);
}();

async function createAutores() {
  if (await pg.schema.hasTable('autores')) {
    await pg.schema.dropTable('autores');
  }

  await pg.schema.createTable('autores', (table) => {
    table.integer('idAutor').primary().notNullable();
    table.string('nomeAutor').notNullable();
    table.string('siglaPartidoAutor').notNullable();
  });
}

async function createProposicoes() {
  if (await pg.schema.hasTable('proposicoes')) {
    await pg.schema.dropTable('proposicoes');
  }

  await pg.schema.createTable('proposicoes', (table) => {
    table.integer('id').primary().notNullable();
    table.text('ementa').notNullable();
    table.string('descricaoTipo').notNullable();
    table.timestamp('dataApresentacao').notNullable();
  });
}

async function createAutorias() {
  if (await pg.schema.hasTable('autorias')) {
    await pg.schema.dropTable('autorias');
  }

  await pg.schema.createTable('autorias', (table) => {
    table.increments('id');
    table.integer('idAutor').notNullable().references('autores.idAutor');
    table.integer('idProposicao').notNullable().references('proposicoes.id');
  });
}

async function createTables() {
  try {
    await createAutores();
    await createProposicoes();
    await createAutorias();
  } catch (error) {
    console.log(error);
  }
}

async function insertProposicoes() {
  for (let proposicao of proposicoes) {
    await pg('proposicoes').insert({
      id: proposicao.id,
      ementa: proposicao.ementa,
      descricaoTipo: proposicao.descricaoTipo,
      dataApresentacao: proposicao.dataApresentacao,
    });
  }
}

async function insertAutores() {
  for (let autor of autores) {
    await pg('autores').insert({
      nomeAutor: autor.nomeAutor,
      idAutor: autor.idAutor,
      siglaPartidoAutor: autor.siglaPartidoAutor,
    });
  }
}

async function insertAutorias() {
  for (let proposicao of proposicoes) {
    for (let autor of proposicao.autores) {
      await pg('autorias').insert({
        idAutor: autor.idAutor,
        idProposicao: proposicao.id
      });
    }
  }
}

async function insertDados() {
  try {
    await insertProposicoes();
    await insertAutores();
    await insertAutorias();
  } catch (error) {
    console.log(error);
  }
}

createTables()
.then(() => insertDados() 
.then(() => pg.destroy().then(() => console.log('destroy connection'))));