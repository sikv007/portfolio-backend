import express from "express";
import cors from "cors";
import { corsOptions } from "./config.js";

const app = express();

if (process.env.NODE_ENV === "production") app.use(cors(corsOptions));
if (process.env.NODE_ENV === "development") app.use(cors());

app.use(express.static("./static"));

app.route("/").get((req, res) => {
  res.status(200).json({
    status: "sucess",
    message: "Hello!",
  });
});

export default app;
