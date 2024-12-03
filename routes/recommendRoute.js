const express = require('express');
const RecommendController = require('../controllers/recommendController');
const recommendController = require('../controllers/recommendController');

const router = express.Router();
//lay' du lieu trong database
router.get('/recommended', recommendController.getRecommendations);
// Route để lấy danh sách sản phẩm phổ biến trong test
router.get('/testrecommended', recommendController.getTestrecommendProducts);

// //api
// // Tạo một Recommend mới
// router.post('/createrecommend', RecommendController.createRecommend);

// // Lấy tất cả Recommend
// router.get('/allrecommend', RecommendController.getAllRecommends);

// // Lấy Recommend theo ID
// router.get('/getbyidrecommend/:id', RecommendController.getRecommendById);

// // Cập nhật Recommend theo ID
// router.put('/updatebyidrecommend/:id', RecommendController.updateRecommend);

// // Xóa Recommend theo ID
// router.delete('/deletebyidrecommend/:id', RecommendController.deleteRecommend);


module.exports = router;
