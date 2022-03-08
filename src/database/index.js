import databaseConfig from '../config/database'

export default async function connect() {
  if (global.connection)
      return global.connection.connect();

  const { Pool } = require('pg');

  const connectionString = `postgres://${databaseConfig.username}:${databaseConfig.password}@${databaseConfig.host}:${databaseConfig.port}/${databaseConfig.database}`

  const pool = new Pool({
      connectionString: connectionString
  });

  //apenas testando a conexão
  const client = await pool.connect();
  console.log("Criou pool de conexões no PostgreSQL!");

  const result = await client.query('SELECT NOW()');
  console.log(result.rows[0]);
  client.release();

  //guardando para usar sempre o mesmo
  global.connection = pool;
   return pool.connect();

}

