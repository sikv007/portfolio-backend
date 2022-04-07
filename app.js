import express from "express";
import cors from "cors";
import socialsRouter from "./routes/socialsRoute.js";
import aboutRouter from "./routes/aobutRoute.js";
import homeRouter from "./routes/homeRoute.js";
import fs from "fs";

const frontend = fs.readFileSync("./public/frontend/index.html", "utf-8");

const app = express();
app.use(cors());
app.use(express.static("./public"));

app.use("/api/socials", socialsRouter);
app.use("/api/about", aboutRouter);
app.use("/", homeRouter);

export default app;
