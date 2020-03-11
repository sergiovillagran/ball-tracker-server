'use strict'

const debug = require('debug')('issues-reporter:db')
const mongoose = require('mongoose')

function buildURI (host, name, dbport, user, password) {
  let conectionURI = `mongodb://`
  let port = dbport || 27017

  if (user !== '' && password !== '') {
    conectionURI += `${user}:${password}@`
  }

  conectionURI += `${host}:${port}/${name}`

  return conectionURI
}

module.exports = async function setupDatabase ({ host, name, port, user, pwd }) {
  let URI = buildURI(host, name, port, user, pwd)
  
  debug('config', URI)
  try {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    return true
  } catch (error) {
    debug(error)
    throw (error)
  }
}
