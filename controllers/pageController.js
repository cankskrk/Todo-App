const Task = require('../models/TodoList');
const CompletedTask = require('../models/CompletedList');

exports.getMainPage = async (req, res) => {
  const task = await Task.find({});
  res.render('main', {
    task,
  });
};

exports.getCompletedPage = async (req, res) => {
  const completedtask = await Task.find({});
  res.render('completed', {
    completedtask,
  });
};
