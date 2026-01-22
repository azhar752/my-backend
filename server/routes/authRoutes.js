const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "MY_SUPER_SECRET_KEY_12345678";

// REGISTER - Ab ye working hai
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, msg: "Registered Successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error during registration" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    if (user.password !== password) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, msg: "Login successful" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error during login" });
  }
});

module.exports = router;
