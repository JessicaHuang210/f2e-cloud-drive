const express = require("express");
const app = express();
var cors = require("cors");

app.listen(1300);
app.use(cors());
app.use("/home", require("./routers/home"));

console.log("you sre listen on 3000 port--------------");
