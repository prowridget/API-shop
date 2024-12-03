const multer = require("multer");
const path = require("path");



const multerConfig = require("../utils/multerConfig");


const upload = multer(multerConfig).single("image");

const uploadFile = (req) => {
  return new Promise((resolve, reject) => {
    upload(req, null, (err) => {
      if (err) {
        return reject(new Error("Failed to upload image"));
      }
      if (!req.file) {
        return reject(new Error("No file uploaded"));
      }
      const imageUrl = `/uploads/${req.file.filename}`;
      resolve(imageUrl);
    });
  });
};

module.exports = {
  uploadFile,
};
