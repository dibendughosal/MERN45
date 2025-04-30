const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    productDetails: {
        type: String,
        required:true
    },
    brand: {
        type: String,
        required:true
    },
    category: {
        type: String,
        enum: ['Electronics', 'Clothing', 'Books', 'Home', 'Beauty'],
        required: true
    },
    price: {
        type: String,
        required: true
    },
    discountPrice:{
        type: String,
        required: true
    },
    stocks: {
        type: Number
    },
    status: {
        type:String,
        enum: ["In Stock", "Out of Stock", "Return"],
        default: 'In Stock'
    },
    imgUrl: {
        type: String
    },
    videoUrl: {
        type: String
    },
    ratings: {
        type: Number,
    },
    seller: {
        type: String,
        required: true
    }


})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;