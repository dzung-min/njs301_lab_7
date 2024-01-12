const express = require("express")

const productController = require("../controllers/product")

const router = express.Router()

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.addProduct)

module.exports = router
