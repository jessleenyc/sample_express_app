var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  // userName by default will be ''
  userName: { type: String, default: '' },
  // when creating a user, an email is required
  email: { type: String, required: true },
  // a user must also have a password
  password: { type: String, required: true}
});

userSchema.methods.validatePassword = function (pswd) {
    return this.password === pswd;
}
var User = mongoose.model('User', userSchema);

module.exports = User;
