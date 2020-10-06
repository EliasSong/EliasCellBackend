var mongoose = require('./db.js');
Schema = mongoose.Schema;
var userSchema = new Schema({
  email:{type:String},
  password:{type:String},
  username:{type:String},
});
module.exports = mongoose.model('user',userSchema,'users');