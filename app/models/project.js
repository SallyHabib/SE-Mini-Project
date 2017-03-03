var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var mongoosePages = require('mongoose-pages');
var projectSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true 
    },
    URL:String,
    
code:String,    
     img2: String,
     
   
});
projectSchema.plugin(mongoosePaginate);
//mongoosePages.skip(projectSchema);

var Project = mongoose.model("project", projectSchema);

module.exports = Project;