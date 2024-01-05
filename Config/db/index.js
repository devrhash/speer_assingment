const mongoose = require("mongoose");
const { DB_USER, DB_PASS, DB_NAME } = require("../");



mongoose.connect(
	`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.ljxbx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
).then(() => console.log("MongoDB connected"))
	.catch(err => console.log(err));;

module.exports = mongoose;