var express = require("express");
const userController = require("../controllers/user");
const messageController = require("../controllers/messageController")
const users = require("../models/users");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.query);
  res.render("index", { title: "Passport js" });
});

router.get("/signup", function (req, res, next) {
  console.log(req.query);
  res.render("signup", { title: "Passport js" });
});
router.get("/login", function (req, res, next) {
  console.log(req.query);
  res.render("login", { title: "Passport js" });
});
router.get("/welcome", function (req, res, next) {
  console.log(req.query);
  res.render("welcome", { title: "Passport js" });
});
router.get("/user", async (req, res, next) => {
  try {
    const data = await users.find({});
    res.send(data);
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/signup", userController.signUpPost);
router.post("/login", userController.post);

router.get("/message",messageController.get)
router.post("/message",messageController.post)
module.exports = router;
