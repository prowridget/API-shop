const express = require('express');
const router = express.Router();
// const productController = require('../controllers/productController');
const ProductController = require('../controllers/productController');
// // test
// router.get('/testpopular', productController.getPopularProducts);
// //lay du lieu popular tu datadb
// router.get('/popularrr', productController.getPopulartions);

//api
// tao
router.post('/createpopular', ProductController.createProduct);

// lay all
router.get('/allpopular', ProductController.getAllProducts);

// lay theo id
router.get('/getbyidpopular/:id', ProductController.getProductById);

// sua theo _id
router.put('/updatebyidpopular/:id', ProductController.updateProduct);

// xoa theo _id
router.delete('/deletepopular/:id', ProductController.deleteProduct);

module.exports = router;
