const mongoose = require('mongoose')

/* Models */
const Question = require('../models/Questions')
const Score = require('../models/Scores')

exports.getAllQuestion = (req, res) => {
    Question.find({})
        .then((questions) => {
            if (!questions)
            {
                res.status(204).send({message: 'Questions not found!' })
                return
            }

            res.status(200).send({questions})
        })
        .catch((err) => {
            res.status(500).send({message: err.message })
        })
}

exports.getOneQuestion = (req, res) => {
    let question_id = req.params.id

    if (!question_id)
    {
        res.status(400).send({message: 'Bad request. Id is the required parameter!'})
        return
    }

    Question.findById(question_id, {right_option:false})
        .then((question) => {
            if (!question)
            {
                res.status(204).send({message: 'Question not found!' })
                return
            }

            res.status(200).send({question})
        })
        .catch((err) => {
            res.status(500).send({message: err.message})
        })
}

exports.isRight = (req, res) => {
    let {question_id, answer, user_id} = req.body

    let pipeline = [
        {
            $match: {
                _id: parseInt(question_id)
            }
        },
        {
            $lookup: {
                from: 'question_relations',
                localField: '_id',
                foreignField: 'question_id',
                as: 'meta_info'
            }
        },
        {
            $unwind: '$meta_info'
        },
        {
            $project: {
                _id: true,
                right_option: true,
                parent_id: '$meta_info.parent_id',
                level: '$meta_info.level',
                point: '$meta_info.point',
            }
        }
    ]

    Question.aggregate(pipeline)
        .then((question) => {
            question = question[0]

            if (question.right_option === answer){
                Score.findOneAndUpdate(
                    {
                        user_id: mongoose.Types.ObjectId(user_id)
                    },
                    {
                        $inc: {
                            score: question.point
                        }
                    },
                    {
                        upsert: true
                    })
                    .then((result) => {
                        if (result)
                        {
                            res.status(200).send({
                                success: true,
                                score: result.score + question.point
                            })
                        }else{
                            res.status(200).send({
                                success: true,
                                score: question.point
                            })
                        }
                    })
                    .catch((err) => {
                        res.status(500).send(err)
                    })
            }else{
                Score.findOneAndRemove({user_id: mongoose.Types.ObjectId(user_id) })
                    .then((result) => {
                        res.status(200).send(result)
                    })
                    .catch((err) => {
                        res.status(500).send(err)
                    })
            }
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}