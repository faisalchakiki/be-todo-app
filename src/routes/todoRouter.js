const express = require('express')
const todoRouter = express.Router()

const { createTodo, getTodos, updateTodo, deleteTodo, getDetailTodos } = require('../controller/todoController')

todoRouter.get('/', getTodos)
todoRouter.get('/:id', getDetailTodos)
todoRouter.post('/', createTodo)
todoRouter.patch('/:id', updateTodo)
todoRouter.delete('/:id', deleteTodo)

module.exports = todoRouter;
