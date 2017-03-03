let User = require('../models/User');
let project = require('../models/project');
var fs = require('fs');
var sess;
var v=1;
//global.username="";
let projectController = {

    getAllProjects: function (req, res) {

        User.paginate({},{page :v , limit:10},function (err, result1) {
             project.find(function (err, Tables) {
                res.render('Visitor-View',{"userTables":result1.docs,Tables,v} );

            })

        });
       
    },
  /*  getAllProjects: function (req, res) {

       User.find(function (err, userTables) {
           project.find(function (err, Tables) {
               res.render('Visitor-View', { userTables, Tables });

           })

       })
      },*/





   createUser: function (req, res) {
        if ((req.body.UserName == "") || (req.body.Password == "") || (req.body.Name == "")) {
            res.render('SignUP', { empty: 1 })
        }
        else {
             User.findOne({ UserName: req.body.UserName}, function (err, user) {
            if (err) {
                res.send(err.message);
            } else {
                if (!user) {
let user = new User(req.body);
            if (req.file) {
            user.img = req.file.originalname;

                user.save(function (err, user) {
                    if (err) {
                        res.send(err.message)
                        console.log(err);
                    }
                    else {

                        console.log(user);
                        //   res.send(req.body.img.data);
                        sess = req.session;
                        sess.UserName = req.body.UserName;
                        res.render('AddProject', { empty: 0 });
                    }
                })
            } else {
                user.save(function (err, user) {
                    if (err) {
                        res.send(err.message)
                        console.log(err);
                    }
                    else {

                        console.log(user);
                        //   res.send(req.body.img.data);
                        sess = req.session;
                        sess.UserName = req.body.UserName;
                        res.render('AddProject', { empty: 0 });
                    }
                })
            }
        }else{
            res.render('SignUP',{empty:2});
        }

                } 
            }

        
        )

            
    }},

    createPortofolio: function (req, res) {
  
        let Project = new project({ "userName": sess.UserName, "URL": req.body.URL, "code": req.body.code });
        if(req.file)  {Project.img2 = req.file.originalname;
       
        Project.save(function (err, Project) {
            if (err) {
                res.send(err.message)
                console.log(err);
            }
            else {

                console.log(Project);
               res.redirect('/viewProfile');
            }
        })
    }else{
        if((req.body.code=="")&&(req.body.URL=="")){
        res.render('AddProject',{empty:1})
    }else{
        Project.save(function (err, Project) {
            if (err) {
                res.send(err.message)
                console.log(err);
            }
            else {
  
                    res.redirect('/viewProfile');
            }
        })
}

    }},


    checkUser: function (req, res) {
        if(req.body.UserName==""||req.body.Password==""){
            res.render('Login',{UserNotFound: 2})
        }else{
        User.findOne({ UserName: req.body.UserName, Password: req.body.Password }, function (err, user) {
            if (err) {
                res.send(err.message);
            } else {
                if (!user) {

                    res.render("Login", { UserNotFound: 1 });


                } else {
 
 UserNotFound:0;
                    sess = req.session;
                    sess.UserName = req.body.UserName;
                    res.redirect('/viewProfile');


                }
            }

                  })
    }},

    getProfile: function (req, res) {



        project.find({ userName: sess.UserName }, function (err, projectsTables) {

            if (err)
                res.send(err.message);
            else{

               
               
                    res.render('User-Profile', {projectsTables});
}})

               

    },
    addWork: function (req, res) {


        res.render('AddProject',{empty:0})
    },


}

module.exports = projectController;
