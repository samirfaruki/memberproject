var express = require("express");
const users = require("../models/users");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.query);
  res.render("index", { title: "Passport js" });
});

router.get("/user", async (req, res, next) => {
  try {
    const data = await users.find({});
    res.send(data);
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
