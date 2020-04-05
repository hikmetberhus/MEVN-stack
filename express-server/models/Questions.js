const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    _id: Number,
    subject: {
        type: String,
        required: true,
        maxlength: 15
    },
    content:{
        type: String,
        required: true
    },
    option_a:{
        type: String,
        required: true
    },
    option_b:{
        type: String,
        required: true
    },
    option_c:{
        type: String,
        required: true
    },
    option_d:{
        type: String,
        required: true
    },
    right_option: {
        type:String,
        required: true
    }

},{
    _id: false
})

module.exports = mongoose.model('Question', QuestionSchema)