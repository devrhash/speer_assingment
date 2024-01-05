const express = require("express");
const auth = require("./auth");
const user = require("./user");
const router = express.Router();
const notes = require("./notes");
const allreqLimiter = require("../middleware/ratelimiter");
const { tokenVerification } = require("../middleware");
const searchQuery = require("./notes/searchQuery");
// AUTH Routes * /api/auth/*

router.get("/search", allreqLimiter, tokenVerification, searchQuery);
router.use("/auth", auth);
router.use("/user", user);
router.use("/notes", notes);

module.exports = router;