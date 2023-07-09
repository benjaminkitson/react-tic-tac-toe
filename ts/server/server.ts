import express from "express";
const path = require("path");
const app = express();
const sls = require("serverless-http");

const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.redirect("/");
});

// app.listen(process.env.PORT || 3000, () => {
//   console.log("Tic-Tac-Toe!");
// });

module.exports.server = sls(app);
