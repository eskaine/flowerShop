require("dotenv").config();
const express = require("express");
const passport = require('passport');
const cors = require("cors");
const app = express();

require("./config/mongo.config");
require("./config/passport.config");

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.json());
app.use(passport.initialize());
app.use(cors({origin: "http://localhost:3000"}));

app.use('/auth', require("./routes/auth.routes"));
app.use('/products', require("./routes/products.routes"));
app.use('/cart', passport.authenticate('jwt', { session: false }), require("./routes/cart.routes"));
app.use('/wishlist', passport.authenticate('jwt', { session: false }), require("./routes/wishlist.routes"));
app.use('/user', passport.authenticate('jwt', { session: false }), require("./routes/user.routes"));

app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(process.env.PORT, () => {
  console.log(`running on ${process.env.PORT}`);
});