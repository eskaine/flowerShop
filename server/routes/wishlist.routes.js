const router = require("express").Router();
const User = require("../models/user.models");
const { validationResult } = require("express-validator");
const { checkObjectID } = require("../auth/validate");


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
  router.post("/:userid", [checkObjectID('productid')], async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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