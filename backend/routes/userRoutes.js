const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

router.route("/").post(userController.registerUser);
router.post("/login", userController.authUser);
router
  .route("/profile")
  .get(protect, userController.getUserProfile)
  .put(protect, userController.updateUserProfile);

module.exports = router;
