const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const cookieSession = require('cookie-session');
const authRouter = require('./routers/auth');
const todoRouter = require('./routers/todo');
const authMiddleware = require('./middlewares/auth');

const app = express();

//Session
app.use(cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY || 'secret'],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use(authMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressLayouts);

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/auth', authRouter);
app.use('/todo', todoRouter);

const port = process.env.PORT || 3000;
app.listen(port);