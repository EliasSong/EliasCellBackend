var moment = require("moment")
var mongoose = require('./db.js');
Schema = mongoose.Schema;
var imageSchema = new Schema({
  imageURL:{type:String},
  imageTime:{type:String,default:moment().format('YYYY-MM-DD hh:mm:ss')},
});
module.exports = mongoose.model('image',imageSchema,'images');