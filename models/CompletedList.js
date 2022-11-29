const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompletedTodoSchema = new Schema({
  task: {
    type: String,
    required: [true, 'Please enter a task!'],
  },
  priority: String,
});

const CompletedTask = mongoose.model('CompletedTask', CompletedTodoSchema);

module.exports = CompletedTask;
