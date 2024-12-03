const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
            type: Number,
            required: true,
            unique: true,
            default: () => Math.floor(Math.random() * 100)},
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stars: { type: Number, required: false, default: 0 },
  img: { type: String, required: true },
  location: { type: String, required: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  type_id: { type: Number, required: true },
}
);

module.exports = mongoose.model('Product', productSchema);
