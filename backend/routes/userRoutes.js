const express = require("express");
const router = express.Router();
const authController = require("../controllers/userController");

router.post("/login", authController.authUser);

module.exports = router;
