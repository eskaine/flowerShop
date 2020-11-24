const router = require("express").Router();
const Product = require("../models/product.models");
const User = require("../models/user.models");

/**
 * @functions WISHLIST
 * ***************************************************************
 */

 /**
  * @GET USER PROFILE WISHLIST
  */
 router.get("/:userid",async (req,res)=>{

    try {
        let wishList = await User.findById(req.params.userid).populate("wishList");
        res.status(200).json(wishList)
    }catch(error) {
        res.sendStatus(400);
    }
})


 /**
  * @POST PUSH TO WISHLIST
  */
  router.post("/:userid", async (req,res)=>{
      console.log("wl HERE!")
    try {

        let productid = req.body.productid;
        let userid = req.params.userid;
        
        let user = await User.findById(userid);
        let item = user.wishList.find((el) => el._id.equals(productid))

        if (item === undefined) {

            await User.findByIdAndUpdate(userid,
                {
                    $push: {
                        wishList: productid
                    }
                })
            res.sendStatus(200)
        } else if (item._id.equals(productid)) {
            res.sendStatus(400)
        } 
        
    }catch (error){
        res.sendStatus(400)
    }
  })


 /**
  * @DELETE REMOVE FROM WISHLIST
  */
  router.delete("/:userid/:wishListid", async (req,res)=>{
    try {

        let {wishListid, userid} = req.params;
        await User.findByIdAndUpdate(userid,
                {
                    $pull: {
                        wishList: wishListid
                    }
                })
        res.sendStatus(200)       
    }catch (error){
        res.sendStatus(400)
    }
  })


module.exports = router