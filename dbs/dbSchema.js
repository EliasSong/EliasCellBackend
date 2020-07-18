var moment = require("moment")
var mongoose = require('./db.js'),
  Schema = mongoose.Schema;
var UserSchema = new Schema({
  blogTitle : { type: String },
  blogDesc:{type:String},
  blogCarousel:{type:String},
  blogMDContent:{type:String},
  blogHTMLContent:{type:String},
  blogTime:{type:String,default:moment().format('YYYY-MM-DD hh:mm:ss')},
  blogTag:{type:String},
});
module.exports = mongoose.model('blog',UserSchema,'blogs');