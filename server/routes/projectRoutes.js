const express = require("express");
const router = express.Router();
const {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// Sabhi routes define karein
router.get("/", getProjects); // GET: http://localhost:5000/api/projects/
router.post("/add", addProject); // POST: http://localhost:5000/api/projects/add (Aapka frontend yahan bhej raha hai)
router.post("/", addProject); // POST: backup route
router.put("/:id", updateProject); // PUT: http://localhost:5000/api/projects/:id
router.delete("/:id", deleteProject); // DELETE: http://localhost:5000/api/projects/:id

module.exports = router;
