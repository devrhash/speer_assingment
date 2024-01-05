const express = require("express");
const router = express.Router();
const finduser = require("./addUser");
const { tokenVerification } = require("../../middleware");
router.get("/addUser", tokenVerification, finduser);
module.exports = router;