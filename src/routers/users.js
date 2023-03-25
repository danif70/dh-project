const express = require('express');
let router = express.Router();
const users = require('../controllers/usersController');
const validations = require('../validations')

router.get('/login', users.getLogin);
router.post('/login', users.postLogin);
router.get('/logout', users.getLogout);
router.get('/register', users.register);
router.post('/register', validations, users.registerUser);

module.exports = router;
