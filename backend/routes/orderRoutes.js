const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const protect = require("../middleware/authMiddleware");

router.route("/").post(protect, orderController.addOrderItems);
router.route("/myorders").get(protect, orderController.getMyOrders);
router.route("/:id").get(protect, orderController.getOrderById);
router.route("/:id/pay").put(protect, orderController.updateOrderToPaid);
module.exports = router;
