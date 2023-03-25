const express = require('express');
let router = express.Router();
const users = require('../controllers/usersController');
const validations = require('../validations')

router.get('/login', users.login);
router.get('/register', users.register);
router.post('/register', validations, users.registerUser);

module.exports = router;