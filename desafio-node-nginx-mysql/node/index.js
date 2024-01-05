const express = require('express')
const { queryPromise } = require('./queryPromise')

async function createApp() {
  const app = express()
  const sqlTable = `CREATE TABLE IF NOT EXISTS characterList(id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id))`;

  await queryPromise.query(sqlTable)

  const characters = [['Felipe Mateus'], ['Ana Luiza'], ['Zelia Petrocchi'], ['Lucia']]
  const sqlInsert = `INSERT INTO characterList(name) VALUES ?`;

  await queryPromise.queryMultiple(sqlInsert, characters)

  app.get('/', async (req, res) => {
    const selectCharacters = `SELECT * FROM characterList`
    const allCharacters = await queryPromise.query(selectCharacters)

    const html = `<h1>Full Cycle Rocks!</h1>\n
  <ul>
    ${allCharacters.map(character => `<li>${character.name}</li>`).join('')}
  </ul>`

    res.send(html)
  })
  return app
}

module.exports = createApp