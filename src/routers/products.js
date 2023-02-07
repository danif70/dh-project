
const express = require('express');
let router = express.Router();
const products = require('../controllers/productsController');


router.get('/products', products.list);
router.get('/create', products.formcreate);
router.post('/create', products.create);

module.exports = router;