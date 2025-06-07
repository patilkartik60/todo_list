const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TodoListSchema = new Schema({
    task: String,
    date: Date,
    priority: String,
    status: Boolean
})

module.exports = mongoose.model('TodoList', TodoListSchema);