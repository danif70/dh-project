const express = require('express');
let router = express.Router();
const users = require('../controllers/usersController');

router.get('/login', users.getLogin);
router.post('/login', users.postLogin);
router.get('/logout', users.getLogout);
router.get('/register', users.register);
// Register Post

module.exports = router;
