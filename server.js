// import express
const express = require("express");
const time = require("./middleware/isAuth");
// instrance
const app = express();
// middleware
app.use(time);
// routing
app.use(express.static("views"));
// app.get("/", (req, res) => res.send("hello wo"));
// port
const PORT = 4000;
// run the server
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is runing")
);
