const Recommend = require('../models/recommendModel');
const seedData = require('../models/recommendModel');

const getRecommendedProducts = async () => {
    try {
        
        const data = await Recommend.find({});
        return data;
    } catch (error) {
        throw new Error('Error fetching recommendations: ' + error.message);
    }
};


const getTestRecommendProducts = () => {
    return seedData;
};


module.exports = {
    getRecommendedProducts,
    getTestRecommendProducts
};

// //api
// class RecommendService {
//     // Tạo một Recommend mới
//     async createRecommend(data) {
//       const recommend = new Recommend(data);
//       return await recommend.save();
//     }
  
//     // Lấy danh sách tất cả Recommend
//     async getAllRecommends() {
//       return await Recommend.find();
//     }
  
//     // Lấy thông tin Recommend theo ID
//     async getRecommendById(id) {
//       return await Recommend.findById(id);
//     }
  
//     // Cập nhật Recommend
//     async updateRecommend(id, data) {
//       return await Recommend.findByIdAndUpdate(id, data, { new: true });
//     }
  
//     // Xóa Recommend theo ID
//     async deleteRecommend(id) {
//       return await Recommend.findByIdAndDelete(id);
//     }
//   }
  
//   module.exports = new RecommendService();