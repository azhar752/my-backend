const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
require("dotenv").config();

const app = express();

// Database Connect
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes - Yahan "api/auth" link hona zaroori hai
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
