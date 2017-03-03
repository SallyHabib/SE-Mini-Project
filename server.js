//require depenciess
var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var mongoosePages = require('mongoose-pages');
var multer=require('multer');
var fs = require('fs');
var expressvalidation = require('express-validation');
var joi= require('joi');
var DB_URI = "mongodb://localhost:27017/users";
var session = require('express-session');
var passport =require('passport');
var passportstrategy= require('passport-strategy');
var expressvalidator =require('express-validator');
var   flash = require('connect-flash');
var paginate = require('express-paginate');

var app = express();

app.set('view engine', 'ejs');

// configure app
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/uploads'));
app.use(session({
  secret: 'zozo',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
//app.use(paginate.middleware(10, 50));
app.use(flash());
app.use(expressvalidator());
//app.use(multer({dest: '/home/sally/Documents/MiniProject (copy)/uploads'}).any());
//app.use(session({secret:'dhwjbdbhhwbdh'}));
mongoose.connect(DB_URI);
app.use(router);


// start the server
app.listen(8080, function(){
    console.log("server is listening on port 8080");
})