import express from "express";
import cors from "cors";
import socialsRouter from "./routes/socialsRoute.js";

const app = express();
app.use(cors());
app.use(express.static("./static"));

app.use("/api/socials", socialsRouter);

app.route("/").get((req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello!",
  });
});

export default app;
