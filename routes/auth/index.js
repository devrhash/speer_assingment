const express = require("express");
const router = express.Router();
const signUp = require("./signup");
const loginUser = require("./login");
const allreqLimiter = require("../../middleware/ratelimiter");

// ROUTES * /api/auth/
router.post("/login", allreqLimiter, loginUser);
router.post("/register", allreqLimiter, signUp);
// router.post("/", checkPassword);

module.exports = router;