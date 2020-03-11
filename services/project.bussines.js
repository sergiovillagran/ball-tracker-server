'use strict'

const ProjectModel = require('../db').project()

class ProjectBussines {
  async create ({ app, type, version, status, date, requester }) {
    return ProjectModel.create(app, type, version, status, date, requester)
  }

  async findAll () {
    return ProjectModel.findAll()
  }

  async findById (id) {
    return ProjectModel.findById(id)
  }
}

module.exports = ProjectBussines