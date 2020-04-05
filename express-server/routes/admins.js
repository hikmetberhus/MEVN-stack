const express = require('express');
const router = express.Router();

const adminController = require('../controller/AdminController');
const validation = require('../middleware/validation')

/* GET users listing (permission: admin) */
router.get('/admins', adminController.index)

/* GET admin with id  */
router.get('/admins/:id', adminController.show)

/* POST create new admin  */
router.post('/admins', validation.users, adminController.create)

/* PUT update admin with id */
router.put('/admins/:id', validation.users, adminController.update)

/* DELETE destroy admin with id */
router.delete('/admins/:id', adminController.destroy)



module.exports = router;
