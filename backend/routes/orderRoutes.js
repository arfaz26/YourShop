const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const protectedRoutes = require("../middleware/authMiddleware");

router
  .route("/")
  .post(protectedRoutes.protect, orderController.addOrderItems)
  .get(
    protectedRoutes.protect,
    protectedRoutes.isAdmin,
    orderController.getOrders
  );
router
  .route("/myorders")
  .get(protectedRoutes.protect, orderController.getMyOrders);
router.route("/:id").get(protectedRoutes.protect, orderController.getOrderById);
router
  .route("/:id/pay")
  .put(protectedRoutes.protect, orderController.updateOrderToPaid);

router
  .route("/:id/deliver")
  .put(
    protectedRoutes.protect,
    protectedRoutes.isAdmin,
    orderController.updateOrderToDelivered
  );

module.exports = router;
