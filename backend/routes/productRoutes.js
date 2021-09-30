import express from "express";
import Product from "../models/productModel.js";
import asyncHanlder from "express-async-handler";
import mongoose from "mongoose";
const router = express.Router();

router.get(
  "/",
  asyncHanlder(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHanlder(async (req, res) => {
    console.log(req.params.id.toString());
    const product = await Product.findById(req.params.id.toString());
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);
export default router;
