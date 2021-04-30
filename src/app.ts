import express from "express";
import dotenv from "dotenv";
dotenv.config();
const {
  PORT,
} = process.env;
const app = express();
const port = `${PORT}`;
app.get("/", (req, res) => {
  res.status(200).send({
    message: "My First Express API"
  });
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});