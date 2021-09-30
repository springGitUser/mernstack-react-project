import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/Users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectMongoDb from "./config/db.js";

dotenv.config();

connectMongoDb();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //Import data
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    //Setting the userObject in Products collection documents...
    const sampleProdcuts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProdcuts);
    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed...".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
