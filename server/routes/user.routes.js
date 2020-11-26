const router = require("express").Router();
const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { verifyProfile } = require("../auth/validate");

/**
 * @functions USER PROFILES
 * ***************************************************************
 */

/**
 * @GET USER PROFILE DETAILS
 * @findOne find by userid and return only specific keys to model obj.
 */
router.get("/:userid", async (req, res) => {
  try {
    let userDetails = await User.findOne(
      { _id: req.params.userid },
      "firstName lastName username email password address phone"
    );
    res.status(200).json({ userDetails });
  } catch (error) {
    res.sendStatus(400);
  }
});

/**
 * @PUT USER PROFILE UPDATES
 * @findOne find by userid and return only specific keys to model obj if not null.
 */
router.put("/:userid", verifyProfile(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let objForUpdate = {};

    if (req.body.firstName) objForUpdate.firstName = req.body.firstName;
    if (req.body.lastName) objForUpdate.lastName = req.body.lastName;
    if (req.body.email) objForUpdate.email = req.body.email;
    if (req.body.address) objForUpdate.address = req.body.address;
    if (req.body.phone) objForUpdate.phone = req.body.phone;

    objForUpdate = { $set: objForUpdate };

    let updatedData = await User.findByIdAndUpdate(
      { _id: req.params.userid },
      objForUpdate,
      { new: true }
    );
    res.status(200).json({ updatedData });
  } catch (error) {
    res.sendStatus(400);
  }
});

/**
 * @PUT USER PROFILE PASSWORD UPDATE
 * @findOne find by userid and return only specific keys to model obj if not null.
 * @ALERT REMOVE password from URL DISPLAY
 */
router.put("/:userid/password", async (req, res) => {
  try {
    let { oldPassword, newPassword } = req.body;
    let userid = req.params.userid;
    let dbpassword = await User.findOne({ _id: userid }, "password");
    let result = await bcrypt.compare(oldPassword, dbpassword.password);

    if (result) {
      let hash = await bcrypt.hash(newPassword, 10);

      await User.findByIdAndUpdate(userid, {
        $set: {
          password: hash,
        },
      });
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;
