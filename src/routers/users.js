const express = require('express');
let router = express.Router();
const users = require('../controllers/usersController');

router.get('/login', users.login);
router.get('/register', users.register);
router.post('/login', users.redirec);
router.post('/register', users.redirec);

module.exports = router;