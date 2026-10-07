const express = require("express");
const authMidleware = require("../midleware/authMidleware");
const allowRoles = require("../midleware/roleMidleware");
const { signup, login, getProfile } = require("../controllers/authControllers");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", authMidleware, getProfile);
router.get("/Admin-test", authMidleware, allowRoles("admin"), (req, res) => {
  res.json({
    message: "Admin Access granted",
  });
});
module.exports = router;
