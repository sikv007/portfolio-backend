import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/static`));

app.route("/").get((req, res) => {
  res.status(200).json({
    status: "sucess",
    message: "Hello!",
  });
});

export default app;