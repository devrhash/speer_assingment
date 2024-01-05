const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.users = require("./user");
db.notes = require("./notes");


module.exports = db;