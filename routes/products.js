const router = require("express").Router();
const verify = require("./verifyToken");
const products = require("../model/products");

router.get("/", verify, async (req, res) => {
  const savedProduct = await products.find();
  res.send(savedProduct);
});

module.exports = router;
