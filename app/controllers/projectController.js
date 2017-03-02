let User = require('../models/User');
let project = require('../models/project');
var fs = require('fs');
var sess;
let flag;
//global.username="";
let projectController = { 
    
    getAllProjects:function(req, res){
        
        User.find(function(err, userTables){
             project.find(function(err,Tables){
                 res.render('Visitor-View',{userTables,Tables});
                 
             })
             
        })
       
             
          
            //res.send(req.body.img.data);
                
       
    },

    createUser:function(req, res){
        let user = new User(req.body);
       // var string = encodeURIComponent(req.body.userName);
  user.img = req.file.originalname ;
        user.save(function(err, user){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
                
 
   /* user.img.data = fs.readFileSync(req.body.img);
    user.img.contentType = 'image/png';
    user.save(function (err, user) {
      if (err) throw err;

console.error('saved img to mongo');})*/
                
                
                 
                 console.log(user);
             //   res.send(req.body.img.data);
              sess=req.session;
        sess.UserName=req.body.UserName;
                  res.render('AddProject');
            }
        })
    },
    createPortofolio:function(req, res){
       // req.body.userName=username;
        let Project = new project({"userName":sess.UserName,"URL":req.body.URL,"code":req.body.code});
          Project.img2 = req.file.originalname ;
        Project.save(function(err, Project){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
                
 
   /* Project.img2.data = fs.readFileSync(req.body.img2);
    Project.img2.contentType = 'image/png';
    Project.save(function (err, user) {
      if (err) throw err;

console.error('saved img to mongo');})
                console.log(Project);
                
             //   res.send(req.body.img.data);*/
            
              console.log(Project);
                 res.render('Home');
            }
        })
    },


    checkUser:function(req,res){
        User.findOne({UserName:req.body.UserName,Password:req.body.Password},function(err,user){
if(err){
    res.send(err.message);
}else {
    if(!user){
        
	
flag:1;
    }else {
       sess=req.session;
        sess.UserName=req.body.UserName;
         res.redirect('/viewProfile');


    }
}

        })
    },

getProfile:function(req,res){



        project.find({userName:sess.UserName},function(err, projectsTables){
            
            if(err)
                res.send(err.message);
            else
          
            //res.send(req.body.img.data);
          
                 res.render('User-Profile', {projectsTables});
        })

},
addWork:function(req,res){

   
        res.render('AddProject')
},


}

module.exports = projectController;