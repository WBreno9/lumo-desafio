import knex from 'knex';

export default knex({
  client: 'pg',
  connection: {
    host: 'postgres-lumo',
    user: 'localhost',
    password: 'lumo',
    database: 'props_db'
  }
});
