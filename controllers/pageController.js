const Task = require('../models/TodoList');
const CompletedTask = require('../models/CompletedList');

exports.getPage = async (req, res) => {
  const task = await Task.find({});
  res.render('main', {
    task,
  });
};
