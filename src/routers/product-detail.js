
const express = require('express');
const router = express.Router();
const detailController = require('../controllers/productDetailController')

router.get('/product-detail/:id', detailController.detail);

module.exports = router;