
const express = require('express');
let router = express.Router();
const edit = require('../controllers/editController');

router.get('/products/:id/edit', edit.edit);
router.put('/products/:id/edit', edit.overwrite);

module.exports = router;