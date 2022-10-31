const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const productRoute = require("./routes/products");

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, () =>
  console.log("connected to mongo")
);

app.use(express.json());

app.use("/login", authRoute);
app.use("/products", productRoute);

app.listen(3000, () => console.log("server Running on port 3000"));
