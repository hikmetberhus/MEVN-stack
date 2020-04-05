const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionRelationSchema = new Schema({
    question_id: {
        type: Number,
        required: true
    },
    parent_id: [],
    level: {
        type: Number,
        required:true
    },
    point: {
        type: Number,
        required: true
    }
},{
    _id: false
})

module.exports = mongoose.model('QuestionRelation', QuestionRelationSchema)