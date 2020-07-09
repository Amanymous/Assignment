const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hi");
});

router.post("/calculate", (req, res) => {
  console.log(req.body);
});

module.exports = router;
