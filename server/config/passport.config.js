require("dotenv").config();
const passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user.models");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  "register",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      try {
        const user = await User.create(req.body);
        return done(null, user);
      } catch (error) {
        done(null, error);
      }
    }
  )
);


passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      console.log('email', email);
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false);
        }

        const validate = await user.isValidPassword(password);
        if (!validate) {
          return done(null, false);
        }
      console.log('email2', user);

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      console.log("jwt stra", token)
      try {
        // let user = await User.findOne({id: token.sub})
       
        //   if (user) {
              return done(null, token);
          // } else {
          //     return done(null, false);
              // or you could create a new account
          // }
      //  return done(null, token.id);
      } catch (error) {
        console.log(error);
        done(error, false);

      }
    }
  )
);

module.exports = passport;