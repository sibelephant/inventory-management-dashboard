import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/inventory-db';

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

import { getInventory, createInventoryItem } from './controllers/inventoryController';

app.get('/', (req, res) => {
  res.send('Inventory API is running!');
});

app.get('/api/inventory', getInventory);
app.post('/api/inventory', createInventoryItem);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
