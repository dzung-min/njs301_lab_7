const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const productsRouter = require("./routes/products")

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(logger("dev"))
app.use(express.urlencoded())
app.use(express.json())

app.use("/products", productsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
