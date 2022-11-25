const Task = require('../models/TodoList');
const CompletedTask = require('../models/CompletedList');

exports.getPage = (req, res) => {
  res.render('main');
};
