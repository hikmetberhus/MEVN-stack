const express = require('express')
const router = express.Router()

const authController = require('../controller/AuthController')
const validation = require('../middleware/validation')

router.post('/register', validation.register, authController.register);

router.post('/login', validation.login, authController.login);

module.exports = router;
