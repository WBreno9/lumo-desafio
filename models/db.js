import knex from 'knex';

export default knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    database: process.env.DB 
  }
});
