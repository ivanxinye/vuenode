/**
 * 用户信息
 */
var mongoose = require('./db.js');
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String },
    phone: { type: String },
    password: { type: String }
});

module.exports = mongoose.model('User',UserSchema);