import express from 'express';
import db from './db.js';
import user from './controllers/usercontroller.js';
import game from './controllers/gamecontroller.js';
import session from 'express-session';
import validate_session from './middleware/validate-session.js';

const app = express();

db.sync();
app.use(session({
    secret: 'secret value',
    resave: false,
    saveUninitialized: false
}));
app.use(express.json());
app.use('/api/auth', user);
app.use(validate_session);
app.use('/api/game', game);
app.listen(4000, () => {
    console.log("App is listening on 4000");
});