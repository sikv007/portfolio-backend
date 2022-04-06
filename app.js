import express from "express";
import cors from "cors";
import { corsOptions } from "./config.js";

const app = express();

app.use(cors(corsOptions));

app.use(express.static("./static"));

app.route("/").get((req, res) => {
  res.status(200).json({
    status: "sucess",
    message: "Hello!",
  });
});

export default app;
