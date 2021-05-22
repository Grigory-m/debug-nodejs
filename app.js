var express = require('express');
var app = express();
var db = require('./db');
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller');
const session = require('express-session');

db.sync();
app.use(session({
    secret: 'secret value',
    resave: false,
    saveUninitialized: false
}));
app.use(require('body-parser').json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(4000, function() {
    console.log("App is listening on 4000");
})