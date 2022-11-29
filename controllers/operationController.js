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
  const { task, priority } = await Task.findById(req.params.id);
  await CompletedTask.create({ task, priority });
  await Task.findByIdAndRemove(req.params.id);
  res.redirect('/');
};

exports.restoreTask = async (req, res) => {
  const { task, priority } = await CompletedTask.findById(req.params.id);
  await Task.create({ task, priority });
  await CompletedTask.findByIdAndRemove(req.params.id);
  res.redirect('/completed-tasks');
};

exports.removeTask = async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.redirect('/');
};

exports.editTask = async (req, res) => {
  const editTask = await Task.findOne({ _id: req.params.id });
  editTask.task = req.body.task;
  editTask.priority = req.body.priority;
  await editTask.save();
  res.redirect('/');
};
