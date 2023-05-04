const express = require('express');
let router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController');

// Multer
const multer = require('multer');
let MulterDiskStorage = multer.diskStorage({

    destination: (req, file, callback) => 
    {
        let folder = path.join(__dirname,'../../public/images/products');
        callback(null, folder);
    },

    filename: (req, file, callback) =>
    {
        let imageName = String(Date.now()+path.extname(file.originalname));
        callback(null, imageName);
    }

});

let fileUpload = multer({storage: MulterDiskStorage});

// GET view to create product
router.get('/create', productsController.createForm);

// POST create product
router.post('/create', fileUpload.single('file'), productsController.create);

// GET products list
router.get('/products', productsController.list);

// GET product detail
router.get('/products/:id', productsController.detail);

// GET edit product
router.get('/products/:id/edit', productsController.edit);

// PUT update product
router.put('/products/:id/edit', fileUpload.single('file'), productsController.update);

// DELETE product
router.delete('/products/:id', productsController.deleteProduct);

module.exports = router;