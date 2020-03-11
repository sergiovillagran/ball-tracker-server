'use strict'

const path = require('path')
const glob = require('glob')


function readRoutes () {
  const routesPaths = glob.sync('./routes/*.routes.js')
  return routesPaths.map((routePath) => require(path.join(process.cwd(), routePath)))
}

module.exports = readRoutes()