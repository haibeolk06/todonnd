const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../middlewares/ensure_logged_in');
const Todo = require('../models/todo');

router.use(ensureLoggedIn);

router.get('/', function(req, res){
    res.locals.title = 'TODO APP';
    res.render('todo/body');
});

router.post('/', function(req, res){
    const { name } = req.body;
    Todo.add(name);
    req.session.todoList = Todo.getAll();
    res.locals.todoList = Todo.getAll();
    res.locals.title = 'TODO APP';
    res.render('todo/body');
});

module.exports = router;