const express = require('express')
const router = express.Router()

const questionController = require('../controller/QuestionController')

/* GET questions listing */
router.get('/questions', questionController.getAllQuestion)

/* GET question with id */
router.get('/questions/:id', questionController.getOneQuestion)


module.exports = router