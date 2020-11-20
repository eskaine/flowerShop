const router = require("express").Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
require("dotenv").config();
//TO UPDATE

/**
 * @method POST to sign up
 * @route Sign UP
 * @authenticate signs a token upon sucessful sign up
 * @payload is the user_id
 * @returns sucessful sign up
 */


router.post(
    "/signup",
  
    async (req, res, next) => {
      passport.authenticate(
        "signup",
        { session: false },
        async (err, user, info) => {
          const body = { _id: user._id, email: user.email };//not sure if this works, but standardised to login
          const token = await jwt.sign({ user: body }, process.env.SECRET);
  
          res.status(200).json({
            message: "Signup successful",
            user: user,
            token,
          });
        }
      )(req, res, next);
    }
  );


/**
 * @method POST to log in
 * @route Log in
 * @authenticate signs a token upon sucessful sign in
 * @payload is the user_id and email
 * @returns sucessful sign up
 */

router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');

            return next(error);
          }

          req.login(user, { session: false }, async (error) => {//false session to opt out using seesion and using token instead
              if (error) return next(error);

              const body = { _id: user._id, email: user.email };//this is payload, and in the payload, userID and UserEmail are stored
              const token = jwt.sign({ user: body }, process.env.SECRET);//encrypt/encode the payload body using Sign

              return res.json({ token });//send the token down to webpage
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

module.exports = router;