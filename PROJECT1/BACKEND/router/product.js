const express = require("express");
const upload = require("../middleware/multer");
// const { getAllProduct , createProduct, updateProduct } = require("../controller/product");
const { getAllProduct , createProduct , updateProduct , updateProductWithImage } = require("../controller/product")
// const { route } = require("./user");
// const product = require("../model/product");
const router = express.Router();

router.get("/product",getAllProduct);
router.post("/product",upload.single("productImage"),createProduct);
router.put("/product/:id",updateProduct);
router.put("/productwithimage/:id", upload.single("productImage"),updateProductWithImage);

module.exports = router;