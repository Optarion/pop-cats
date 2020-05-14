const { Client } = require('pg')

let client

module.exports = {
  init: () => {
    client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    })

    client.connect()
  },
  get: async () => {
    const { rows } = await client.query('SELECT id, name, age, price FROM cats WHERE deleted=false ORDER BY id DESC LIMIT 10')

    return rows
  }
}
