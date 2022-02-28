const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programSchema = new Schema({
    title:{
        type:String
    },
    image: {
        type: String,
        required: true
    },
    description:{
        type:String,
    },
    code:{
        type:String,
    }
})

module.exports = mongoose.model("program",programSchema);