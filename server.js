import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "./config.env",
});

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {});

app.listen(process.env.PORT || 3000, () => {});