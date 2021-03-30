const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt');

router.use(function (req, res, next) {
    res.locals.title = 'TODO APP';
    next();
});

router.get('/login', function (req, res) {
    if(!req.user) {
        res.render('auth/login');      
    } else {
        res.redirect('/todo');
    }
});

router.post('/login', function(req, res){
    const { email, password } = req.body;
    const found = User.findByEmail(email);

    if (found && bcrypt.compareSync(password, found.password)) {
        req.session.userId = found.id;
        res.locals.currentUser = found;
        res.redirect('/todo');
    } else {      
        res.render('auth/login');
    }
});

router.get('/logout', function(req, res){
    delete req.session.userId;
    res.redirect('login');
});


module.exports = router;