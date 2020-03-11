'use strict'

const ProjectModel = require('../models/')

module.exports = function ProjectController () {
  async function create (name) {
    const project = new ProjectModel(
      { 
        name
      }
    )
    return project.save()
  }
  
  async function findById (id) {
    return ProjectModel.findById(id)
  }

  async function findAll () {
    return ProjectModel.find({})
  }

  async function findByApp (app) {
    return ProjectModel.find({ app })
  }

  return {
    create,
    findById,
    findAll, 
    findByApp
  }
 }
