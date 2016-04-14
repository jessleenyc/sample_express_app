var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  userName : { type : String, default  : ''   },
  email    : { type : String, required : true },
  password : { type : String, required : true }
});

userSchema.methods.validatePassword = function (pswd) {
    return this.password === pswd;
}
var User = mongoose.model('User', userSchema);

module.exports = User;
