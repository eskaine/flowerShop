const router = require("express").Router();
const { findById } = require("../models/product.models");
const Product = require("../models/product.models");
const User = require("../models/user.models");
const bcrypt = require("bcrypt")
/**
 * 
 * update the routes on wednesday for CART
 * 
 */


/**
 * @functions USER PROFILES
 * ***************************************************************
 */


/**
 * @GET USER PROFILE DETAILS
 * @findOne find by userid and return only specific keys to model obj.
 */
router.get("/profile/:userid", async (req, res) => {

    try {
        let userDetails = await User.findOne({ _id: req.params.userid },
            "firstName lastName username email password address phone"
        )
        console.log(userDetails)
        res.status(200).json({ userDetails })
    } catch (error) {
        res.sendStatus(400)
    }
})


/**
 * @PUT USER PROFILE UPDATES
 * @findOne find by userid and return only specific keys to model obj if not null.
 */
router.put("/profile/:userid", async (req, res) => {

    try {

        let objForUpdate= {}

        if(req.body.firstName) objForUpdate.firstName = req.body.firstName;
        if(req.body.lastName)  objForUpdate.lastName  = req.body.lastName;
        if(req.body.email)     objForUpdate.email     = req.body.email;
        if(req.body.address)   objForUpdate.address   = req.body.address;
        if(req.body.phone)     objForUpdate.phone     = req.body.phone;

        objForUpdate = { $set: objForUpdate }
        
        await User.update({_id: req.params.userid}, objForUpdate);
        let updatedData = await User.findById(req.params.userid);
        res.status(200).json({ updatedData })
    } catch (error) {
        res.sendStatus(400)
    }
})

/**
 * @PUT USER PROFILE PASSWORD UPDATE
 * @findOne find by userid and return only specific keys to model obj if not null.
 */

router.put("/profile/:userid/password", async (req,res)=>{
    try {

        let {oldPassword, newPassword} = req.body;
        let userid = req.params.userid;
        let dbpassword = await User.findOne({_id: userid},"password");
        let result = await bcrypt.compare(oldPassword, dbpassword.password);
        // console.log(result)

        if(result) {
            let hash = await bcrypt.hash(newPassword,10);
            // console.log(hash)
            await User.findByIdAndUpdate(userid,
                {
                    $set: {
                        password: hash
                    }
                }
            )
            res.sendStatus(200)
        } else {
            res.sendStatus(403)
        }
    }catch (error){
        res.sendStatus(400)
    }
})


/**
 * @functions CART
 * ***************************************************************
 */
async function addToCart(body, params) {
    let { count, ribbon, wrap } = body;
    let { userid, productid } = params;
    console.log("count2", count, ribbon, wrap);
    console.log("Uid", userid, productid);
    return await User.findByIdAndUpdate(userid,
        {
            $push: {
                cart: {
                    cartItem: productid,
                    count,
                    totalPrice,
                    ribbon,
                    wrap,
                }
            }
        })
}


/**
 * @PUT put items into cart
 * @if statement
 * @if Level1 : if blank cart(undefined) pust to array function
 * @if Level2 : if cartItem id is same AND ribbon and wrap same as item's carts wrap, then update price and count,
 * @if Level3 : if cartItem id is same BUT ribbon and wrap IS NOT SAME as item's carts wrap and ribbon, then push to cart
 */
router.put("/:userid/:productid", async (req, res) => {
    try {
        let { count, ribbon, wrap } = req.body;
        let { userid, productid } = req.params;
        // console.log("count,ribbon,wrap", typeof count, ribbon, wrap);
        // console.log("userid,productid", userid, productid);
        let product = await Product.findById(productid)
        totalPrice = product.price * Number(count);
        // console.log("type of count" , typeof Number (count))
        let user = await User.findById(userid);
        // console.log("user = ", user)
        let item = user.cart.find((el) => el.cartItem.equals(productid))
        // console.log("itemof use", item)
        // let a = item.cartItem.equals(productid)
        // console.log(a)

        if (item === undefined) {

            addToCart(req.body, req.params);

        } else if (item.cartItem.equals(productid) && item.ribbon == ribbon && item.wrap == wrap) {
            await User.findOneAndUpdate(
                {
                    "_id": userid,
                    "cart.cartItem": productid,
                },
                {
                    $inc: {
                        "cart.$.count": count,
                        "cart.$.totalPrice": totalPrice
                    }
                });
        } else if ((item.cartItem.equals(productid) && item.ribbon !== ribbon) || (item.cartItem.equals(productid) && item.wrap !== wrap)) {

            addToCart(req.body, req.params);
            // console.log("testif2",item.ribbon, ribbon)
        }
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(400);
    }
})


/**
 * @GET get Cart items
 */
router.get("/:userid/cart", async (req, res) => {
    try {
        let user = await User.findById(req.params.userid).populate(
            {
                path: "cart",
                populate: {
                    path: "cartItem",
                    model: Product,
                }
            })
        let userCart = user.cart
        res.status(200).json({ userCart })
    } catch (error) {
        res.sendStatus(400);
    }
})


/**
 * @PUT update quantity in cart via $Pull Operator (quantity =0) /$Set Operator (quantity>0)
 */
router.put("/cart/userid/updateCart", async (req, res) => {
    console.log(req.body)

    try {
        let { userid, cartid, count } = req.body;
        console.log("userid", userid, "productid", cartid, "count", count)
        let user = await User.findById(userid)
        let cart = user.cart.find((cart) => (cart._id.equals(cartid)))
        let product = await Product.findById(cart.cartItem)
        let totalPrice = product.price * count
        if (count >= 1) {
            await User.findOneAndUpdate(
                {
                    "_id": userid,
                    "cart._id": cartid,
                },
                {
                    $set: {
                        "cart.$.count": count,
                        "cart.$.totalPrice": totalPrice
                    }
                });
        } else if (count <= 0) {
            await User.findByIdAndUpdate(userid,
                {
                    $pull: {
                        cart: { _id: cartid }

                    }
                }

            )
        }
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(400);
    }

})


/**
 * @DELETE items from Cart
 * router.delete("/:userid/cart", ...
 * delete quantity in cart via $pull operator
 */
router.delete("/userid/cart", async (req, res) => {
    console.log("hello")
    try {
        let { cartid, userid } = req.body;
        await User.findByIdAndUpdate(userid,
            {
                $pull: {
                    cart: { _id: cartid }

                }
            }

        )
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(400);
    }
})


/**
 * @functions WISHLIST
 * ***************************************************************
 */


 /**
  * @GET USER PROFILE WISHLIST
  */

router.get("/wishlist/:userid",async (req,res)=>{
    console.log("hello wishlist here")
    try {
        let wishList = await User.findOne({ _id: req.params.userid },"wishList")
        res.status(200).json(wishList)
    }catch(error) {
        res.sendStatus(400);
    }
})


 /**
  * @POST TO WISHLIST
  */

  router.post("/wishlist/:userid", async (req,res)=>{

  })


module.exports = router;




// router.get("/profile/:userid", async (req, res) => {
//     console.log("hello")
//     try {
//         let user = await User.findById(req.params.userid)
//         res.status(200).json({ user })
//     } catch (error) {
//         res.sendStatus(400)
//     }
// })