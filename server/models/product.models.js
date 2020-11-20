const mongoose = require("mongoose");
const { Schema } = mongoose;


const productSchema = new Schema(
    {
        productname: {type: String, required: true, default: "product"},
        price: {type: Number, required: true, default: 0},
        customisation: {
        ribbon: {enum: ["black", "white"]},
        wrap: {enum:["brown", "black", "pink"]}
        }
    }
);


const Product = mongoose.model("Product", productSchema);

module.exports = Product;
