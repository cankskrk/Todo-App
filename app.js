const mongooose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const express = require('express');

const app = express();
const PORT = 3000;
const pageController = require('./controllers/pageController');
const operationController = require('./controllers/operationController');
const Task = require('./models/TodoList');
const CompletedTask = require('./models/CompletedList');

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

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
app.get('/', pageController.getMainPage);
app.get('/completed-tasks', pageController.getCompletedPage);
app.post('/', operationController.postTask);
app.post('/task-done/:id', operationController.doneTask);
app.post('/completed-tasks-restore/:id', operationController.restoreTask);

// Listen PORT
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
