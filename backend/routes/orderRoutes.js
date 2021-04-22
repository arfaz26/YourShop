const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const protect = require("../middleware/authMiddleware");

router.route("/").post(protect, orderController.addOrderItems);

module.exports = router;
