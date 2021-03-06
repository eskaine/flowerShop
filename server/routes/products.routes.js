const router = require("express").Router();
const Product = require("../models/product.models");
const { validationResult } = require("express-validator");
const { verifyProductName } = require("../auth/validate");

/**
 * @objective to display all products
 * @GET retrieve product listing data to display on landing page
 */
router.get("/", async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.sendStatus(400);
  }
});

router.post("/", verifyProductName(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let { productName } = req.body;
    let product = await Product.find({
      productName: new RegExp("^" + productName + "$", "i"),
    });
    res.status(200).json({ product: product[0] });
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;
