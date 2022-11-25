const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  task: {
    type: String,
    required: [true, 'Please enter a task!'],
  },
  priority: String,
});

const Task = mongoose.model('Task', TodoSchema);

module.exports = Task;
