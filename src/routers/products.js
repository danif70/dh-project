const express = require('express');
let router = express.Router();
const productsController = require('../controllers/productsController');

// GET view to create product
router.get('/create', productsController.createForm);

// POST create product
router.post('/create', productsController.create);

// GET products list
router.get('/products', productsController.list);

// GET product detail
router.get('/products/:id', productsController.detail);

// GET edit product
router.get('/products/:id/edit', productsController.edit);

// PUT update product
router.put('/products/:id/edit', productsController.update);

// DELETE product
router.delete('/products/:id', productsController.deleteProduct);

module.exports = router;