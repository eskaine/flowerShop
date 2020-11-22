const mongoose = require("mongoose");
const { Schema } = mongoose;


const productSchema = new Schema(
    {
        productName: { type: String, required: true, default: "product" },
        price: { type: Number, required: true, default: 0 },
        img_url: String,
        desc: String,
        customisation: {
            ribbon: {type: Array, default: []},
            wrap: {type: Array, default: []},
        }
    }
);


const Product = mongoose.model("Product", productSchema);

module.exports = Product;
