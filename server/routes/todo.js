const express = require('express')
const router = express.Router()

const {getTodos,createTodo,removeTodo,updateTodo} = require('../controller/todoList');

// define the home page route
router.get('/getTodoList', getTodos)

router.post('/create', createTodo)

router.post('/remove', removeTodo)

router.post('/update', updateTodo)

module.exports = router