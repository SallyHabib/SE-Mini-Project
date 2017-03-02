var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true 
    },
    URL:String,
    
code:String,    
     img2: String,
     
   
});

var Project = mongoose.model("project", projectSchema);

module.exports = Project;