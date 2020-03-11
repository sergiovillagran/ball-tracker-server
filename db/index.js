'use strict'

const project = require('./controllers/project')
const dbConection = require('./lib/connection')
let connection = null

if (!connection) {
  let host = process.env.DB_HOST 
  let name = process.env.DB_NAME 
  let port = process.env.DB_PORT
  let user = process.env.DB_USER
  let password = process.env.DB_PWD
  dbConection({ host, name, port, user, password })
    .then(console.log('conected to database'))
    .catch(console.log);
  connection = 1;
}

module.exports = {
  project
}