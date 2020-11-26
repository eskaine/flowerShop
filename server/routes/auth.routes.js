const router = require("express").Router();
const passport = require("passport");
const { validationResult } = require("express-validator");
const { createToken } = require("../auth/auth");
const { checkEmail, verifyRegister } = require("../auth/validate");
require("dotenv").config();

//TO UPDATE

/**
 * @method POST to sign up
 * @route Sign UP
 * @authenticate signs a token upon sucessful sign up
 * @payload is the user_id
 * @returns sucessful sign up
 */

router.post("/register", verifyRegister(), async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  passport.authenticate(
    "register",
    { session: false },
    async (err, user, info) => {
      if (err) res.sendStatus(403);

      const token = await createToken({ id: user._id });
      res.status(200).json({ token });
    }
  )(req, res, next);
});

/**
 * @method POST to log in
 * @route Log in
 * @authenticate signs a token upon sucessful sign in
 * @payload is the user_id and email
 * @returns sucessful sign up
 */

router.post("/login", [checkEmail()], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        return next(err);
      }

      req.logIn(user, async (error) => {
        if (error) return next(error);
        const token = await createToken({ id: user._id });
        res.status(200).json({ token });
      });
    } catch (err) {
      return next(err);
    }
  })(req, res, next);
});

module.exports = router;
