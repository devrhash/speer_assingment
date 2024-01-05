const mongoose = require("./Config/db");
const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const rateLimiter = require("express-rate-limit");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const limiter = rateLimiter({
	windowMs: 1000,
	max: 1
})
var db = mongoose.connection;

db.once("open", function () {
	console.log("db connected!");
});


app.use("/api", routes);

app.get("/", (req, res) => {
	console.log("hello");
	res.send("hello");
});

app.use("*", (req, res) => {
	res.send("Route not found");
});

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
