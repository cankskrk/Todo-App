const mongooose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const express = require('express');

const app = express();
const PORT = 3000;
const pageController = require('./controllers/pageController');
const operationController = require('./controllers/operationController');
const Task = require('./models/TodoList');

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect DB
mongooose
  .connect('mongodb://127.0.0.1:27017/todo-app-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the DB!');
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.get('/', pageController.getPage);
app.post('/', operationController.postTask);

// Listen PORT
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
