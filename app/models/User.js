var mongoose = require('mongoose');
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

var User= mongoose.model("userTable", UserSchema);

module.exports = User;