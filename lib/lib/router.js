'use strict'

const express = require('express')
const routes = require('../../routes')
const router = express.Router()

var ExpressRouter = function (config) {
  this.config = config || {}
  this.express = express()
  this.router = router
}

ExpressRouter.prototype.routingModulesMethods = async function (router) {
  for (const controller of routes) {
    var urls = controller.urls
    var moduleController = require(controller.path)
    
    moduleController = await moduleController()

    for (const url of urls) {
      var getMethod = moduleController[url.get]
      var postMethod = moduleController[url.post]
      var putMethod = moduleController[url.put]
      var deleteMethod = moduleController[url.delete]

      if (getMethod !== undefined) { router.route(url.url).get(getMethod) }

      if (postMethod !== undefined) { router.route(url.url).post(postMethod) }

      if (putMethod !== undefined) { router.route(url.url).put(putMethod) }

      if (deleteMethod !== undefined) { router.route(url.url).delete(deleteMethod) }
    }
  }
}

module.exports = ExpressRouter
