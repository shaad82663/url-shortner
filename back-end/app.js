const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const errorMiddleware = require('./middlewares/errors');

//Using middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser()); 
 
//Importing Routes
const users = require('./routes/user');
const url = require('./routes/url');

 //Routes root URL : http://localhost:4000/

app.use('/', url)
app.use('/', users);
 
//Middleware to handle error.
app.use(errorMiddleware);

module.exports = app;