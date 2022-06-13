const { Pool, Client } = require("pg");

const config = {
  user: "postgres",
  host: "pg_container",
  database: "docker",
  password: "postgres",
  port: 5432,
};
const pool = new Pool(config);
module.exports = {
  async query(text, params) {
    const client = new Client(config);

    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;

    return res;
  },
  async all(text){
    const client=new Client(config)
    const start = Date.now();
    const res = await pool.query(text);
    const duration = Date.now() - start;

    return res;
  }
};
