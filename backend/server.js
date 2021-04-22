const express = require("express");
const dotenv = require("dotenv");
const color = require("colors");
const connect = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json());
dotenv.config();

connect();

app.get("/", (req, res) => {
  res.send("api is running.......");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
