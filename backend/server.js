const express = require("express");
const dotenv = require("dotenv");
const color = require("colors");
const connect = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();
dotenv.config();

connect();

app.get("/", (req, res) => {
  res.send("api is running.......");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
