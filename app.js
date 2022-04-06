import express from "express";
import cors from "cors";
import socialsRouter from "./routes/socialsRoute.js";
import aboutRouter from "./routes/aobutRoute.js";

const app = express();
app.use(cors());
app.use(express.static("./static"));

app.use("/api/socials", socialsRouter);
app.use("/api/about", aboutRouter);

app.route("/").get((req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello!",
  });
});

export default app;
