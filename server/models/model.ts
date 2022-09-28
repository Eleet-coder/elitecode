// const PG_URI = require('./sql-uri.js');

import Pool from 'pg';
const PG_URI: string = 'postgres://ajujsvdj:Om06bGueL9pesqbNYe3gtiOox7LpcUvL@heffalump.db.elephantsql.com/ajujsvdj';

// create a new pool here using the connection string above
const pool1: Pool = new Pool({
  connectionString: PG_URI
});

// pool.query(text, params, callback);


// create a new pool here using the connection string above
// const pool = new Pool({
//   connectionString: PG_URI
// });

export const pool = {
  query: (text, params?, callback?) => {
    console.log('executed query', text);
    return pool1.query(text, params, callback);
  }
};

