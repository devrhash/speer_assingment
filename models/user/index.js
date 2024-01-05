const mongoose = require("mongoose");
const userSchema = require("./userSchema");

const user = mongoose.model("users", userSchema);

console.log(user);
module.exports = user;