const router = require("express").Router();
const Product = require("../models/product.models");
const User = require("../models/user.models");
//TO UPDATE


/**
 * @objective to display all products
 * @GET retrieve product listing data to display on landing page
 */
router.get("/products", async (req, res) => {

    try {
        let products = await Product.find();
        res.sendStatus(200).json({products});
    } catch (error) {
        res.status(400).json({message: "request failed"});
    }
});


/**
 * @objective to get user profile information
 * @GET retrieve loaded userID via req.params.profiledid
 * @profileid  req.params.profileid is retrieving profile id from frontend, search in db for USER Obj id
 */
router.get("/:profileid", async (req, res) => {

    try {
        let profileid = req.params.profileid
        let userProfile = await User.findById(profileid);
        res.sendStatus(200).json({userProfile});
    } catch (error) {
        res.status(404).json({message: "user not found"});
    }
});


/**
 * @objective to edit information in userProfile
 * @PUT senddata down to edit data
 * @profileid  req.params.profileid is retrieving profile id from frontend, search in db for USER Obj id
 */
router.put("/:profileid/edit", async (req, res) => {

    try {
        await User.findByIdAndUpdate(req.params.profileid, 
            {
            $set: {
                "firstName": req.body.firstName,
                "lastName": req.body.lastName,
                "username": req.body.lastName,
                "email": req.body.email,
                "password": req.body.password,
                "address": req.body.address,
                "phone": req.body.phone
                  }
            }
        );
        res.sendStatus(200).json({message: "data updated"});
    } catch (error) {
        res.status(404).json({message: "user not found"});
    }
});






module.exports = router;