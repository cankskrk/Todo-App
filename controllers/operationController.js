const Task = require('../models/TodoList');
const CompletedTask = require('../models/CompletedList');

exports.postTask = async (req, res) => {
  const task = req.body;
  await Task.create({
    ...task,
  });
  res.redirect('/');
};

exports.restoreTask = async (req, res) => {
  const restoreCompletedTask = await Task.findById(req.params.id);
  await Task.create({
    ...restoreCompletedTask,
  });
  await Task.findByIdAndRemove(req.params.id);
  res.redirect('/completed-tasks');
};
