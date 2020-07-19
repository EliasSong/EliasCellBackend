var moment = require("moment");
var mongoose = require('./db.js');
Schema = mongoose.Schema;
var albumSchema = new Schema({
  albumTitle : {type: String},
  albumImage:{type:Array,default:[]},
  albumTime:{type:String,default:moment().format('YYYY-MM-DD hh:mm:ss')},
});
module.exports = mongoose.model('album',albumSchema,'albums');