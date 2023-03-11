const express = require('express');
let router = express.Router();
const users = require('../controllers/usersController');

router.get('/login', users.login);
router.get('/register', users.register);

module.exports = router;