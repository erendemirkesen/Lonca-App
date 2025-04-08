const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// GET /api/products - Get all products for PLP
router.get('/', productController.getProducts);

// GET /api/products/:id - Get single product for PDP
router.get('/:id', productController.getProductById);

module.exports = router; 