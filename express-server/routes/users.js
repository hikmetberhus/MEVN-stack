const express = require('express');
const router = express.Router();

const userController = require('../controller/UserController');

/* GET users listing */
router.get('/users', userController.index)

/* GET user with id  */
router.get('/users/:id', userController.show)

/* POST create new user  */
router.post('/users', userController.create)

/* PUT update user with id */
router.put('/users/:id', userController.update)

/* DELETE destroy user with id */
router.delete('/users/:id', userController.destroy)



module.exports = router;
