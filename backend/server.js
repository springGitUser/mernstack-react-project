import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";

//Initializing the server
const app = express();

app.get("/", (req, res) => {
  res.send(`Server Listening on port ${PORT} nodemon`);
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((prod) => req.params.id === prod._id);
  res.send(product);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Listening on port 5000"));
