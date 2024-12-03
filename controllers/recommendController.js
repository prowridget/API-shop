const RecommendService = require('../services/recommendService');
const recommendService = require('../services/recommendService');

const getRecommendations = async (req, res) => {
    try {
        const recommendations = await recommendService.getRecommendedProducts();
        res.status(200).json(recommendations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTestrecommendProducts = (req, res) => {
    const data = recommendService.getTestRecommendProducts();
    res.json(data);
};


module.exports = {
    getRecommendations,
    getTestrecommendProducts
};

//api
// class RecommendController {
//     // Tạo một Recommend mới
//     async createRecommend(req, res) {
//       try {
//         const recommend = await RecommendService.createRecommend(req.body);
//         res.status(201).json(recommend);
//       } catch (error) {
//         res.status(400).json({ message: error.message });
//       }
//     }
  
//     // Lấy danh sách tất cả Recommend
//     async getAllRecommends(req, res) {
//       try {
//         const recommends = await RecommendService.getAllRecommends();
//         res.status(200).json(recommends);
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
//     }
  
//     // Lấy thông tin Recommend theo ID
//     async getRecommendById(req, res) {
//       try {
//         const recommend = await RecommendService.getRecommendById(req.params.id);
//         if (!recommend) return res.status(404).json({ message: 'Recommend not found' });
//         res.status(200).json(recommend);
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
//     }
  
//     // Cập nhật Recommend
//     async updateRecommend(req, res) {
//       try {
//         const recommend = await RecommendService.updateRecommend(req.params.id, req.body);
//         if (!recommend) return res.status(404).json({ message: 'Recommend not found' });
//         res.status(200).json(recommend);
//       } catch (error) {
//         res.status(400).json({ message: error.message });
//       }
//     }
  
//     // Xóa Recommend theo ID
//     async deleteRecommend(req, res) {
//       try {
//         const recommend = await RecommendService.deleteRecommend(req.params.id);
//         if (!recommend) return res.status(404).json({ message: 'Recommend not found' });
//         res.status(200).json({ message: 'Recommend deleted successfully' });
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
//     }
//   }
  
//   module.exports = new RecommendController();