var mongoose = require('./db.js'),
  Schema = mongoose.Schema;
var UserSchema = new Schema({
  blogTitle : { type: String },
  blogDesc:{type:String},
  blogCarousel:{type:String},
  blogMDContent:{type:String},
  blogHTMLContent:{type:String},
  blogTime:{type:Date,default:Date.now()},
  blogTag:{type:String},
});
module.exports = mongoose.model('blog',UserSchema,'blogs');