
const express = require('express');
let router = express.Router();
const products = require('../controllers/productsController');

router.get('/products', products.list);
router.get('/create', products.formcreate);
router.post('/create', products.create);
router.get('/products/:id', products.detail);
router.delete('/products/:id', products.deleteproduct);
router.get('/products/:id/edit', products.edit);

module.exports = router;