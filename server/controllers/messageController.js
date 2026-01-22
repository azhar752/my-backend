const Message = require("../models/Message.js");

// Jab koi user website se message bheje
exports.sendMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message Sent Successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin dashboard mein saare messages dekhne ke liye
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 }); // Naya message upar dikhega
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Message delete karne ke liye
exports.deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: "Message Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
