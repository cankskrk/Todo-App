const Task = require('../models/TodoList');
const CompletedTask = require('../models/CompletedList');

exports.postTask = async (req, res) => {
  const task = req.body;
  await Task.create({
    ...task,
  });
  res.redirect('/');
};
