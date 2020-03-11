'use strict'

module.exports = async function () {
  return new AppsController()
}

class AppsController {
  post (req, res) {
    
  }

  put (req, res) {

  }

  get (req, res) {
    res.status(200).jsonp({ message: "Jola" })
  }

  getById (req, res) {

  }

  put (req, res) {

  }
}