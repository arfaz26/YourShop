const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const protectedRoutes = require("../middleware/authMiddleware");

router
  .route("/")
  .post(userController.registerUser)
  .get(
    protectedRoutes.protect,
    protectedRoutes.isAdmin,
    userController.getUsers
  );
router.post("/login", userController.authUser);
router
  .route("/profile")
  .get(protectedRoutes.protect, userController.getUserProfile)
  .put(protectedRoutes.protect, userController.updateUserProfile);

module.exports = router;
