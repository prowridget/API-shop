const Recommend = require('../models/recommendModel');

// Dịch vụ xử lý gợi ý
class RecommendService {
  // Tạo một gợi ý mới
  async createRecommend(data) {
    const recommend = new Recommend(data);
    return await recommend.save();
  }

  // Lấy danh sách tất cả gợi ý
  async getAllRecommends() {
    return await Recommend.find();
  }

  // Lấy thông tin gợi ý theo ID
  async getRecommendById(id) {
    return await Recommend.findById(id);
  }

  // Cập nhật gợi ý theo ID
  async updateRecommend(id, data) {
    try {
      const result = await Recommend.findByIdAndUpdate(id, data, { new: true });
      if (!result) {
        throw new Error("Recommendation not found");
      }
      return result;
    } catch (error) {
      throw new Error(error.message || "Error updating recommendation");
    }
  }

  // Xóa gợi ý theo ID
  async deleteRecommend(id) {
    try {
      const result = await Recommend.findByIdAndDelete(id);
      if (!result) {
        throw new Error("Recommendation not found");
      }
      return { message: "Recommendation deleted successfully!" };
    } catch (error) {
      throw new Error(error.message || "Error deleting recommendation");
    }
  }
}

module.exports = new RecommendService();
