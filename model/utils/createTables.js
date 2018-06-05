const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

// Config objectt
const pgConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const client = new Client(pgConfig);

// Read the sql query into a string
const tables = [];
tables.push(fs.readFileSync(path.join(__dirname, '../tables/user.sql')).toString());

client.connect();
tables.forEach((sql, index) => {
  client.query(sql, (err, res) => {
    if (err) {
      console.log(err);
      client.end()
    } else {
      console.log('Table created.');
      if (index === tables.length - 1) client.end();
    }
  });
});

