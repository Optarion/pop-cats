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
  },
  create: async (args) => {
    const { cat: { name, age, price } } = args

    await client.query(`insert into CATS (name, age, price) values (\'${name}\', ${age}, \'$${price}\')`)

    return 'Cat has been added'
  },
  update: async (args) => {
    const { id, cat: { name, age, price } } = args

    await client.query(`update cats set name=\'${name}\', age=${age}, price=\'$${price}\' where id=${id}`)

    return `Cat ${id} has been updated`
  },
  delete: async (args) => {
    const { id } = args

    await client.query(`update cats set deleted=true where id=${id}`)

    return `Cat ${id} has been deleted`
  }
}
