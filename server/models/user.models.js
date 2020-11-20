const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const { Schema } = mongoose;


// TO BE UPDATED IF NEEDED for CHANGES
const userSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: {type: String, required: true},
    phone: Number,
    cart: [
            {cartItem: 
              {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
              }, 
            count: Number 
            }
    ],
    wishList: [
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