const router = require("express").Router();
const Product = require("../models/product.models");
const User = require("../models/user.models");
const { validationResult } = require("express-validator");
const { checkCount, verifyCart, verifyIDs } = require("../auth/validate");

/**
 * @functions CART
 * ***************************************************************
 */
async function addToCart(body, params, totalPrice) {
  let { count, ribbon, wrap } = body;
  let { userid, productid } = params;
  // return await User.findByIdAndUpdate(userid,
  let user = await User.findByIdAndUpdate(userid, {
    $push: {
      cart: {
        cartItem: productid,
        count,
        totalPrice,
        ribbon,
        wrap,
      },
    },
  });
}

/**
 * @GET get Cart items
 */
router.get("/:userid", async (req, res) => {
  try {
    let user = await User.findById(req.params.userid).populate({
      path: "cart",
      populate: {
        path: "cartItem",
        model: Product,
      },
    });
    res.status(200).json({ userCart: user.cart });
  } catch (error) {
    res.sendStatus(400);
  }
});

/**
 * @POST put items into cart
 * @if statement
 * @if Level1 : if blank cart(undefined) pust to array function
 * @if Level2 : if cartItem id is same AND ribbon and wrap same as item's carts wrap, then update price and count,
 * @if Level3 : if cartItem id is same BUT ribbon and wrap IS NOT SAME as item's carts wrap and ribbon, then push to cart
 */
router.post("/:userid/:productid", verifyCart(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      console.log('errors', errors);
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let { count, ribbon, wrap } = req.body;
    let { userid, productid } = req.params;

    let product = await Product.findById(productid);
    let totalPrice = product.price * Number(count);

    let user = await User.findById(userid);

    let item = await user.cart.find((el) => el.cartItem.equals(productid));

    if (item === undefined) {
      await addToCart(req.body, req.params, totalPrice);
    } else if (
      item.cartItem.equals(productid) &&
      item.ribbon == ribbon &&
      item.wrap == wrap
    ) {
      await User.findOneAndUpdate(
        {
          _id: userid,
          "cart.cartItem": productid,
        },
        {
          $inc: {
            "cart.$.count": count,
            "cart.$.totalPrice": totalPrice,
          },
        }
      );
    } else if (
      (item.cartItem.equals(productid) && item.ribbon !== ribbon) ||
      (item.cartItem.equals(productid) && item.wrap !== wrap)
    ) {
      await addToCart(req.body, req.params, totalPrice);
    }
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
});

/**
 * @PUT update quantity in cart via $Pull Operator (quantity =0) /$Set Operator (quantity>0)
 */
router.put("/:userid", [...verifyIDs(), checkCount()], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let { userid, cartid, count } = req.body;

    let user = await User.findById(userid);
    let cart = user.cart.find((cart) => cart._id.equals(cartid));
    let product = await Product.findById(cart.cartItem);
    let totalPrice = product.price * count;
    if (count >= 1) {
      await User.findOneAndUpdate(
        {
          _id: userid,
          "cart._id": cartid,
        },
        {
          $set: {
            "cart.$.count": count,
            "cart.$.totalPrice": totalPrice,
          },
        }
      );
    } else if (count <= 0) {
      await User.findByIdAndUpdate(userid, {
        $pull: {
          cart: { _id: cartid },
        },
      });
    }
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
});

/**
 * @DELETE
 * router.delete("/:userid/cart", ...
 * delete quantity in cart via $pull operator
 */
router.delete("/:userid/:cartid", async (req, res) => {
  try {
    let { cartid, userid } = req.params;
    await User.findByIdAndUpdate(userid, {
      $pull: {
        cart: { _id: cartid },
      },
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;
