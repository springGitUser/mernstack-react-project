import dotenv from "dotenv";
import express from "express";
import connectMongoDb from "./config/db.js";
import colors from "colors";
import productRouter from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMidleware.js";
//Initializing the env configuration
dotenv.config();
// dotenv.config({ path: "/backend/.env" });

//Initializing the server
const app = express();

//Connecting to Mongodb
connectMongoDb();
app.get("/", (req, res) => {
  res.send(`Server Listening on port ${PORT} nodemon`);
});

app.use("/api/products", productRouter);

//Middleware for exception handling...
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.NODE_PORT || 6000;
app.listen(PORT, console.log(`Listening on port ${PORT}`.yellow.bold));
