var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send("Hello from usersRouter");
  res.send({
    title: "Hello form userRouter",
  });
});

module.exports = router;
