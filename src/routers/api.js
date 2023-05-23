const express = require('express');
let router = express.Router();
const path = require('path');
const apiController = require('../controllers/apiController');

router.get('/api/products/:id', apiController.productDetail);
router.get('/api/products', apiController.listProducts);
router.get('/api/users/:id', apiController.userDetail);
router.get('/api/users', apiController.listUsers);

module.exports = router;