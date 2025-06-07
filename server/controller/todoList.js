const TodoList = require("../models/todo_list");


// Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await TodoList.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
}

const createTodo = async (req, res) => {
  try {
    let data = req.body
    const todos = await TodoList.insertOne(data);
    res.status(201).json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create todos' });
  }
}

const removeTodo = async (req, res) => {
  try {
    let data = req.body
    const todos = await TodoList.deleteOne(data);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
}

const updateTodo = async (req, res) => {
  try {
    let data = req.body
    const todos = await TodoList.findOneAndUpdate({_id:data._id},data);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
}

module.exports = {getTodos,createTodo,removeTodo,updateTodo};

