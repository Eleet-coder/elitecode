// const PG_URI = require('./sql-uri.js');

import Pool from 'pg';
const PG_URI: string = 'postgres://khacdqjf:xmEYxbA-DT7T7IN0jFrKhsTmkmsqlzPh@heffalump.db.elephantsql.com/khacdqjf';

// create a new pool here using the connection string above
export const pool: Pool = new Pool({
  connectionString: PG_URI
});

// pool.query(text, params, callback);
