var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var mongoosePages = require('mongoose-pages');
var UserSchema = mongoose.Schema({
    UserName:{
        type:String,
        required:true, 
        unique:true
    },
     
    Password:{
        type:String,
         required:true
    },img: String,
    Name:String
    
       
  

})
UserSchema.plugin(mongoosePaginate);
//mongoosePages.skip(UserSchema);

var User= mongoose.model("userTable", UserSchema);

module.exports = User;