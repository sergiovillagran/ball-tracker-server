'use strict'

module.exports = {
  path: '../../api/project.controller.js',
  urls: [
    {
      url: '/project',
      get: 'get',
      post: 'post'
    },
    {
      url: '/project/:id',
      get: 'getById',
      put: 'put'
    }
  ]
}