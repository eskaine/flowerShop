const router = require("express").Router();
const Product = require("../models/product.models");
/**
 * @objective to display all products
 * @GET retrieve product listing data to display on landing page
 */
router.get("/", async (req, res) => {

    try {
        let products = await Product.find();
        console.log("products", products)
        res.status(200).json({ products });
    } catch (error) {
        res.sendStatus(400);
    }
});



module.exports = router;