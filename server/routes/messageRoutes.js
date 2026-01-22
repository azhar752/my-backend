const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getMessages,
  deleteMessage,
} = require("../controllers/messageController.js");

// Routes ko simple rakha gaya hai taaki frontend se match karein
router.post("/", sendMessage); // Pehle yahan "/send" tha, usey hata kar sirf "/" kar diya
router.get("/", getMessages);
router.delete("/:id", deleteMessage);

module.exports = router;
