

/* Models */
const Question = require('../models/Questions')

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