const express = require("express");
const postController = require("../controllers/productController");
const protectedRoutes = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(postController.getProducts);

router
  .route("/:id")
  .get(postController.getProductById)
  .delete(
    protectedRoutes.protect,
    protectedRoutes.isAdmin,
    postController.deleteroductById
  );

module.exports = router;
