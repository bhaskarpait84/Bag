const express = require("express");
const app = express();

const userModel = require("./models/user.model.js");
const productModel = require("./models/product.model");
const owerModel = require("./models/owner.model.js");
const db = require("./config/mongoose.connect.js");

const ownerRouter = require("./routes/ownerRouter.js");
const userRouter = require("./routes/userRouter.js");
const productRouter = require("./routes/productRouter.js");

const cookieParser = require("cookie-parser");
const path = require("path");
const { Router } = require("express");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownerRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hey");
});

app.listen(3000, () => {
  console.log(`Server is running Port-3000`);
});
