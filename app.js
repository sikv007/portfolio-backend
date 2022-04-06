import express from "express";

const app = express();

app.route("/").get((req,res)=>{
  res.status(200).json({
    status: "sucess",
    message: "Hello!"
  })
})

export default app;