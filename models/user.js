const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    cpassword:String
})

module.exports = mongoose.model("User",userSchema);