const User = require('../models/user');
const Todo = require('../models/todo');

module.exports = function auth(req, res, next){
    const { userId } = req.session;
    res.locals.currentUser = null;
    res.locals.todoList = Todo.getAll();
    if (userId) {  
        const user = User.findById(userId);
        if (user){
            req.user = user;
            res.locals.currentUser = user;
        }
    }
    next();
};