const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScoreSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    score: {
        type: Number
    }
})

module.exports = mongoose.model('Score', ScoreSchema)