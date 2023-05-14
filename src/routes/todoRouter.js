const express = require('express')
const todoRouter = express.Router()

const { createTodo, getTodos, updateTodo, deleteTodo } = require('../controller/todoController')

todoRouter.get('/', getTodos)
todoRouter.post('/', createTodo)
todoRouter.patch('/:id', updateTodo)
todoRouter.delete('/:id', deleteTodo)

module.exports = todoRouter;
