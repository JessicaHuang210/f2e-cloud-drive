const express = require("express");
const router = express.Router();
const list = require("./data/list");
// const sleep = require("../../utils/sleep");

router.get("/", async (req, res) => {
  let status = 200;
  console.log(list[200]);
  res.status(status).json(list[200].data);
});

module.exports = router;
