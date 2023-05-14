const express = require('express')
const routes = express.Router()

const tasksRouter = require('./taskRouter.js')

routes.use('/todos', tasksRouter)

module.exports = routes