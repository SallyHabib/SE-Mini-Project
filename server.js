//require depenciess
var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer=require('multer');
var fs = require('fs');
var DB_URI = "mongodb://localhost:27017/users";
var session = require('express-session');

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
//app.use(multer({dest: '/home/sally/Documents/MiniProject (copy)/uploads'}).any());
//app.use(session({secret:'dhwjbdbhhwbdh'}));
mongoose.connect(DB_URI);
app.use(router);


// start the server
app.listen(8080, function(){
    console.log("server is listening on port 8080");
})