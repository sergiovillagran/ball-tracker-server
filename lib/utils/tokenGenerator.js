'use strict'

const config = require('../utils/auth')
const jwt = require('jwt-simple')
const moment = require('moment')

module.exports = function generateToken (user) {
  let payload = {
    sub: user._id,
    name: user.name,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  }

  return jwt.encode(payload, config.TOKEN_SECRET)
}
