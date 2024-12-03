const uploadService = require("../services/uploadService");

const uploadImage = async (req, res) => {
  try {
    const imageUrl = await uploadService.uploadFile(req);
    res.status(200).json({
      message: "Image uploaded successfully",
      imageUrl: imageUrl,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  uploadImage,
};
