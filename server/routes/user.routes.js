const router = require("express").Router();
const Product = require("../models/product.models");
const User = require("../models/user.models");



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
 * @PUT update quantity in cart
 */
router.put("/:userid/cart", async (req,res)=>{
    console.log("haahh")

    try{
        let {userid} = req.params.userid;
        let {count,id}= req.body;
        let user = await User.findById(userid)
        console.log(user)

        console.log("lol",req.body)
    res.sendStatus(200)
    }catch (error) {
        res.status(400).json({message: "yeap"});
    }
    
})



/**
 * @PUT put items into cart
 * @if statement
 * @if Level1 : if blank cart(undefined) pust to array function
 * @if Level2 : if cartItem id is same AND ribbon and wrap same as item's carts wrap, then update price and count,
 * @if Level3 : if cartItem id is same BUT ribbon and wrap IS NOT SAME as item's carts wrap and ribbon, then push to cart
 */

// push to cart
router.put("/:userid/pushToCart/:productid", async (req, res) => {
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


// router.put("/:userid/updateCart", async (req, res) => {
// console.log("hello")
// })
//http://localhost:8888/user/5fb91228bc5bab3a182aaa49/updateCart
//update Cart


module.exports = router;
