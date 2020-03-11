const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const authorizationController = require('../lib/authorization')

let Router = require('./router')
router = new Router()

var ExpressServer = function (config) {
  config = config || {}

  this.expressServer = router.express
  this.expressRouter = router.router
  
  this.expressServer.use(express.static('../static'))

  this.expressServer.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    next()
  })

  router.routingModulesMethods(this.expressRouter)
  // this.expressServer.use('/3dves/', authorizationController)
  this.expressServer.use(bodyParser.urlencoded({ extended: false }))
  this.expressServer.use(bodyParser.json({ limit: '50mb' }))
  
  
  this.expressServer.use('/3dves', this.expressRouter)
}

module.exports = ExpressServer
