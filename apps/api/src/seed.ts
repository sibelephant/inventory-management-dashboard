import mongoose from "mongoose";
import dotenv from "dotenv";
import InventoryItem from "./models/InventoryItem";

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/inventory-dashboard";

const sampleItems = [
  {
    name: "Maggi Noodles",
    productId: "PROD-001",
    category: "Instant Food",
    buyingPrice: 12,
    quantity: 430,
    unit: "Packets",
    expiryDate: new Date("2025-12-11"),
    thresholdValue: 50,
    availability: "In- stock",
    image: "https://m.media-amazon.com/images/I/81gC7frRJyL._SL1500_.jpg",
    supplierName: "Nestle India",
    supplierContact: "+91 9876543210",
    stockLocations: [
      { storeName: "Sulur Branch", stockInHand: 150 },
      { storeName: "Singanallur Branch", stockInHand: 280 },
    ],
  },
  {
    name: "Bru Coffee",
    productId: "PROD-002",
    category: "Beverages",
    buyingPrice: 250,
    quantity: 20,
    unit: "Packets",
    expiryDate: new Date("2024-08-15"),
    thresholdValue: 30,
    availability: "Low stock",
    image: "https://m.media-amazon.com/images/I/61X7hVlR+JL._SL1000_.jpg",
    supplierName: "Hindustan Unilever",
    supplierContact: "+91 9876543211",
    stockLocations: [
      { storeName: "Sulur Branch", stockInHand: 10 },
      { storeName: "Singanallur Branch", stockInHand: 10 },
    ],
  },
  {
    name: "Red Bull",
    productId: "PROD-003",
    category: "Beverages",
    buyingPrice: 110,
    quantity: 0,
    unit: "Cans",
    expiryDate: new Date("2024-10-01"),
    thresholdValue: 20,
    availability: "Out of stock",
    image: "https://m.media-amazon.com/images/I/61Zl5g5y8mL._SL1500_.jpg",
    supplierName: "Red Bull India",
    supplierContact: "+91 9876543212",
    stockLocations: [
      { storeName: "Sulur Branch", stockInHand: 0 },
      { storeName: "Singanallur Branch", stockInHand: 0 },
    ],
  },
  {
    name: "Bourn Vita",
    productId: "PROD-004",
    category: "Health Drinks",
    buyingPrice: 350,
    quantity: 120,
    unit: "Jars",
    expiryDate: new Date("2025-01-20"),
    thresholdValue: 40,
    availability: "In- stock",
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg",
    supplierName: "Mondelez India",
    supplierContact: "+91 9876543213",
    stockLocations: [
      { storeName: "Sulur Branch", stockInHand: 60 },
      { storeName: "Singanallur Branch", stockInHand: 60 },
    ],
  },
  {
    name: "Horlicks",
    productId: "PROD-005",
    category: "Health Drinks",
    buyingPrice: 320,
    quantity: 100,
    unit: "Jars",
    expiryDate: new Date("2025-02-15"),
    thresholdValue: 40,
    availability: "In- stock",
    image: "https://m.media-amazon.com/images/I/61x-1+k+1+L._SL1000_.jpg",
    supplierName: "GSK Consumer",
    supplierContact: "+91 9876543214",
    stockLocations: [
      { storeName: "Sulur Branch", stockInHand: 50 },
      { storeName: "Singanallur Branch", stockInHand: 50 },
    ],
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB for seeding");

    await InventoryItem.deleteMany({});
    console.log("Cleared existing inventory items");

    await InventoryItem.insertMany(sampleItems);
    console.log("Seeded database with sample items");

    mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();
