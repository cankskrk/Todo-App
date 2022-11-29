const Task = require('../models/TodoList');
const CompletedTask = require('../models/CompletedList');

exports.postTask = async (req, res) => {
  const task = req.body;
  await Task.create({
    ...task,
  });
  res.redirect('/');
};

exports.doneTask = async (req, res) => {
  let doneTask = await Task.findById(req.params.id);
  console.log(doneTask);
  // await Task.findByIdAndRemove(req.params.id);
  await CompletedTask.create({
    ...doneTask,
  });
  res.redirect('/');
};

exports.restoreTask = async (req, res) => {
  const restoreCompletedTask = await Task.findById(req.params.id);
  await Task.create({
    ...restoreCompletedTask,
  });
  await CompletedTask.findByIdAndRemove(req.params.id);
  res.redirect('/completed-tasks');
};
