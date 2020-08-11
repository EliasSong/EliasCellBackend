
var mongoose = require('./db.js'),
  Schema = mongoose.Schema;
var blogSchema = new Schema({
  blogTitle : { type: String },
  blogDesc:{type:String},
  blogCarousel:{type:String},
  blogMDContent:{type:String},
  blogHTMLContent:{type:String},
  blogTime:{type:String},
  blogTag:{type:String},
});
module.exports = mongoose.model('blog',blogSchema,'blogs');