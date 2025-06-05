const express = require('express')
const router = express.Router()
const usersMiddlewares = require('../middlewares/users')
const usersController = require('../controllers/users') 

router.post(
    '/users',
    usersMiddlewares.validateCreateUser,
    usersController.createUser
);

module.exports = router;