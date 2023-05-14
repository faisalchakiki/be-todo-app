const express = require('express')
const routes = express.Router()

const todoRouter = require('./todoRouter.js')

routes.use('/todos', todoRouter)

module.exports = routes