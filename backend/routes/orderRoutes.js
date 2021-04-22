const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const protect = require("../middleware/authMiddleware");

router.route("/").post(protect, orderController.addOrderItems);
router.route("/:id").get(protect, orderController.getOrderById);
module.exports = router;
