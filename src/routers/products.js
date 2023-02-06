
const express = require('express');
let router = express.Router();
const products = require('../controllers/productsController');
const detailController = require('../controllers/productDetailController')


router.get('/products', products.list);
router.get('/product-detail/:id', detailController.detail);
router.get('/products/create', products.formcreate);
router.post('/products/create', products.create);

module.exports = router;