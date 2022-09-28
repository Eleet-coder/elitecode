// const PG_URI = require('./sql-uri.js');

import Pool from 'pg';
const PG_URI: string = 'postgres://ajujsvdj:Om06bGueL9pesqbNYe3gtiOox7LpcUvL@heffalump.db.elephantsql.com/ajujsvdj';

// create a new pool here using the connection string above
export const pool: Pool = new Pool({
  connectionString: PG_URI
});

// pool.query(text, params, callback);