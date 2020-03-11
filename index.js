'use strict'

const https = require('https')
const ExpressServer = require('./lib/lib/expressServer')
const fs = require('fs')

require('dotenv').config()

const expressServer = new ExpressServer()
const app = expressServer.expressServer

const httpsOptions = {
  key: fs.readFileSync(process.env.SSL_KEY, 'utf8'),
  cert: fs.readFileSync(process.env.SSL_CERT, 'utf8')
}

const server = https.createServer(httpsOptions, app)
server.listen(process.env.SERVER_PORT, () => {
  console.log(`server running at https://localhost:${server.address().port}`)
})
