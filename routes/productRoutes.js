const express = require("express")
const productController = require("../controller/productController")
const router = express.Router();


router.get("/products",productController.getAllproducts);
router.post("/products",productController.createProduct);
router.put("/products/:productId",productController.updateProduct);
router.delete("/products/:productId",productController.deleteProduct);


module.exports=router;