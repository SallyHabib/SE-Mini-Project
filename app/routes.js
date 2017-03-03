var express = require('express');
var router = express.Router();
var multer=require('multer');
var mongoosePaginate = require('mongoose-paginate');
var expressvalidation = require('express-validation');
var mongoosePages = require('mongoose-pages');
var joi= require('joi');
var expressvalidator =require('express-validator');
var projectController = require('./controllers/projectController');
var storage=multer.diskStorage({destination:function(req,file,cb){
    cb(null,'./uploads')},filename:function(req,file,cb){
        cb(null,file.originalname )}});
        var upload=multer({storage:storage});

router.get('/',function(req,res){res.render('Home')});

router.get('/login',function(req,res){res.render('Login',{UserNotFound:0,empty:0})});

router.get('/viewProfile',projectController.getProfile);

router.get('/SignUp1',function(req,res){res.render('SignUP',{empty:0,repeat:0})});




router.get('/Login1',function(req,res){res.render('Login',{UserNotFound:0,empty:0})});
router.get('/ViewProjects1', projectController.getAllProjects);
router.post('/createNew',projectController.addWork);

//router.get('/createPortofolio',function(req,res){res.render('index3')});
//router.post('/koko',projectController.createPortofolioAndCheck);

router.post('/userTable',upload.single("img"), projectController.createUser);

router.post('/check',projectController.checkUser);
router.post('/Portofolio',upload.single("img2"),projectController.createPortofolio);
router.get('/Portofolio',projectController.createPortofolio);

module.exports = router;