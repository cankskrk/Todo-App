const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompletedTodoSchema = new Schema({
  task: String,
  priority: String,
});

const CompletedTask = mongoose.model('CompletedTask', CompletedTodoSchema);

module.exports = CompletedTask;
