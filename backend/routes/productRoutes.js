const express = require("express");
const postController = require("../controllers/productController");

const router = express.Router();

router.route("/").get(postController.getProducts);

router.route("/:id").get(postController.getProductById);

module.exports = router;
