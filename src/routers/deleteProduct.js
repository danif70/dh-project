
const express = require('express');
let router = express.Router();
const deleteController = require('../controllers/deleteController');

router.delete('/products/:id', deleteController.deleteproduct);

module.exports = router;