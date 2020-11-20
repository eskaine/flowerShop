const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const { Schema } = mongoose;

// TO BE DETERMINED
const userSchema = new Schema(
  {
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: {type: String, required: true},
    phone: Number,
    cart: [
            {cartitem: 
              {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
              }, 
            count: Number 
            }
    ],
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      }
    ],

  }
);

userSchema.pre(
  'save',
  async function(next) {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next();
  }
);

userSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
}

const User = mongoose.model("User", userSchema);
module.exports = User;