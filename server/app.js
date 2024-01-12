const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(logger("dev"))
app.use(express.urlencoded())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})