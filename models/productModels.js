const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    Product_name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    }
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;