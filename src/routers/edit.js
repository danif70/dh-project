
const express = require('express');
let router = express.Router();
const edit = require('../controllers/editController');

router.get('/products/:id/edit', edit.edit);

module.exports = router;