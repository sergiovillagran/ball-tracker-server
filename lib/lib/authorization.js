'use strict'

const debug = require('debug')('basx:server:auth')
const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../utils/auth')

module.exports = function authController (req, res, next) {
  if (isUnhandledOperation(req)) {
    return next()
  }

  debug('handled')

  if (hasAuthorizationHeader(req)) {
    const authToken = req.headers.authorization
    const payload = jwt.decode(authToken, config.TOKEN_SECRET)

    if (isTokenCaducous(payload)) {
      req.user = payload.sub
      next()
    } else {
      res.status(401).jsonp({ message: 'El token ha expirado' })
    }
  } else {
    res.status(403).jsonp({ message: 'your request doesn\'t have authorization header' })
  }
}

async function isTokenCaducous (payload) {
  if (payload.exp <= moment().unix()) {
    return false
  }

  return true
}

function isUnhandledOperation (req) {
  let flag = false
  if (isOptionOperation(req)) {
    flag = true
  }

  if (isLogin(req.url, req.method)) {
    flag = true
  }

  if (isRegistration(req.url, req.method)) {
    flag = true
  }

  return flag
}

function isOptionOperation (req) {
  if (req.method === 'OPTIONS') {
    return true
  }

  return false
}
function isLogin (url, method) {
  if (url === '/user/logIn' && method === 'POST') {
    return true
  }
  
  return false
}

function isRegistration (url, method) {
  if (url === '/user' && method === 'POST') {
    return true
  }

  return false
}
function hasAuthorizationHeader (req) {
  if (!req.headers.authorization || req.headers.authorization == null) {
    return false
  }
  return true
}
