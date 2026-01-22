const express = require("express");
const router = express.Router();
const {
  getServices,
  addService,
  updateService,
  deleteService,
} = require("../controllers/serviceController.js");

// Sabhi raste (Paths) yahan hain
router.get("/", getServices); // Sab dekhne ke liye
router.post("/add", addService); // Naya add karne ke liye
router.put("/:id", updateService); // Edit/Update karne ke liye (Ye zaroori hai)
router.delete("/:id", deleteService); // Delete karne ke liye

module.exports = router;
