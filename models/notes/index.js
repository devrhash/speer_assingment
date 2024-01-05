const mongoose = require("mongoose");
const notesSchema = require("./notesSchema");

const note = mongoose.model("notes", notesSchema);

module.exports = note;