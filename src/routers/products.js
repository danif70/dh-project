
const express = require('express');
let router = express.Router();
const products = require('../controllers/productsController');


router.get('/products', products.list);
router.get('/products/create', products.formcreate);
router.post('/products/create', products.create);

module.exports = router;