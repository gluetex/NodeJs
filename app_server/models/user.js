var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name: String,
    surname: String,
    username: { type: String, require: true, unique: true },
    password: { type: String, required: true, unique: true }

});

var user = mongoose.model('user', userSchema);
module.exports = user;