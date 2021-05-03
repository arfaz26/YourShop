const express = require("express");
const postController = require("../controllers/productController");
const protectedRoutes = require("../middleware/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(postController.getProducts)
  .post(
    protectedRoutes.protect,
    protectedRoutes.isAdmin,
    postController.createProduct
  );

router
  .route("/:id/reviews")
  .post(protectedRoutes.protect, postController.createProductReview);

router.get("/top", postController.getTopProducts);

router
  .route("/:id")
  .get(postController.getProductById)
  .delete(
    protectedRoutes.protect,
    protectedRoutes.isAdmin,
    postController.deleteproductById
  )
  .put(
    protectedRoutes.protect,
    protectedRoutes.isAdmin,
    postController.updateProduct
  );

module.exports = router;
