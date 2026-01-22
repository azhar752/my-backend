const Project = require("../models/Project.js");

// Get All Projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add New Project
exports.addProject = async (req, res) => {
  try {
    // Ensure images is always an array
    const projectData = {
      ...req.body,
      images: Array.isArray(req.body.images) ? req.body.images : [],
    };
    const newProject = new Project(projectData);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Project (Edit Logic)
exports.updateProject = async (req, res) => {
  try {
    const updatedData = {
      ...req.body,
      images: Array.isArray(req.body.images) ? req.body.images : [],
    };
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true },
    );
    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Project
exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
