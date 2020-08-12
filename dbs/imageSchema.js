var mongoose = require('./db.js');
Schema = mongoose.Schema;
var imageSchema = new Schema({
  imageURL:{type:String},
  parentId:{type:String},
  imageTime:{type:String},
});
module.exports = mongoose.model('image',imageSchema,'images');