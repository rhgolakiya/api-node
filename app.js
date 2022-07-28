require('dotenv').config();
require('./database/connection');
const express = require('express');
const app = express();
const port = process.env.port || 3000;
const path = require('path');
const session = require('express-session');
const flash = require("connect-flash");
// const authRoutes = require('./routes/auth');
const programRoute = require('./routes/programing');
const errorController = require("./controllers/404");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false}));

app.set("view engine", "ejs");
app.set("views", "views");
app.use(flash());

// app.use(authRoutes);
app.use(programRoute);
app.use(errorController.get404);

app.listen(port,() => {
    console.log(`server is running on http://localhost:${port}`);
})