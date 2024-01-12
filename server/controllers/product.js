const Product = require("../models/product")

/**
 * @type {import("express").Handler}
 */
exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll()
  res.json(products)
}

/**
 * @type {import("express").Handler}
 */
exports.addProduct = async (req, res, next) => {
  const { title, imageUrl, description, price } = req.body
  try {
    const product = new Product(title, imageUrl, description, price)
    await product.save()
  } catch (error) {
    console.log(error)
  }
}
