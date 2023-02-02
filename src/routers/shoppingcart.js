
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/shoppingcartController')

router.get('/cart', cartController.cart);

module.exports = router;