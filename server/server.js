require("dotenv").config();
const express = require("express");
const passport = require('passport');
const cors = require("cors");
const app = express();
const User = require("./models/user.models");

require("./config/mongo.config");
require("./config/passport.config");

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.json());
app.use(passport.initialize());
app.use(cors());

app.use('/auth', require("./routes/auth.routes"));
app.use('/products', require("./routes/products.routes"));
app.use('/user', require("./routes/user.routes"));
app.post("/", async(req,res)=>{
  let data = new User(req.body)
  await data.save()
})
// app.use('/user', passport.authenticate('jwt', { session: false }), require("./routes/user.routes"));

// app.use('test', require("./routes/test.routes"));


app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(process.env.PORT, () => {
  console.log(`running on ${process.env.PORT}`);
});