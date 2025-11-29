import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/health";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI: string = process.env.MONGODB_URI as string;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

import {
  getInventory,
  createInventoryItem,
  getInventoryItem,
} from "./controllers/inventoryController";
import { register, login } from "./controllers/authController";
import { getDashboardStats } from "./controllers/dashboardController";

app.get("/", (req, res) => {
  res.send("Inventory API is running!");
});

app.use("/health", router);

app.get("/api/inventory", getInventory);
app.post("/api/inventory", createInventoryItem);
app.get("/api/inventory/:id", getInventoryItem);
app.get("/api/dashboard", getDashboardStats);

app.post("/api/auth/register", register);
app.post("/api/auth/login", login);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
