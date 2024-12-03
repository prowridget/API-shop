const Product = require('../models/productModel');

// Dịch vụ xử lý sản phẩm
class ProductService {
  // Tạo sản phẩm mới
  async createProduct(data) {
    const product = new Product(data);
    return await product.save();
  }

  // Lấy danh sách tất cả sản phẩm
  async getAllProducts() {
    return await Product.find();
  }

  // Lấy thông tin sản phẩm theo ID
  async getProductById(id) {
    return await Product.findById(id);
  }

  // Cập nhật sản phẩm theo ID
  async updateProduct(_id, data) {
    try {
      const result = await Product.findByIdAndUpdate(_id, data, { new: true });
      if (!result) {
        throw new Error("Product not found");
      }
      return result;
    } catch (error) {
      throw new Error(error.message || "Error updating product");
    }
  }

  // Xóa sản phẩm theo ID
  async deleteProduct(_id) {
    try {
      const result = await Product.findByIdAndDelete(_id);
      if (!result) {
        throw new Error("Product not found");
      }
      return { message: "Product deleted successfully!" };
    } catch (error) {
      throw new Error(error.message || "Error deleting product");
    }
  }
}

module.exports = new ProductService();