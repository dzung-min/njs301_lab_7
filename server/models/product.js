const fs = require("fs/promises")
const path = require("path")

const productFile = path.join(__dirname, "..", "data", "products.json")

class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title
    this.imageUrl = imageUrl
    this.description = description
    this.price = price
  }

  static async fetchAll() {
    try {
      const data = await fs.readFile(productFile, "utf8")
      if (!data) throw new Error()
      return JSON.parse(data)
    } catch (error) {
      return []
    }
  }

  async save() {
    try {
      const products = await Product.fetchAll()
      products.push(this)
      fs.writeFile(productFile, JSON.stringify(products))
    } catch (error) {
      console.log(error)
    }
  }

  static async findById(id) {
    try {
      const products = await Product.fetchAll()
      const product = products.find((prod) => prod.id === id)
      if (!product) throw new Error()
      return product
    } catch (error) {
      return null
    }
  }
}

module.exports = Product
