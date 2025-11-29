import mongoose from "mongoose";
import dotenv from "dotenv";
import InventoryItem from "./models/InventoryItem";

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/inventory-dashboard";

const verifySchema = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB for verification");

    const item = await InventoryItem.findOne({});
    if (item) {
      console.log("Found an item. Checking fields...");
      const itemObj = item.toObject();
      const expectedFields = [
        "productId",
        "unit",
        "supplierName",
        "supplierContact",
        "image",
        "stockLocations",
      ];
      const missingFields = expectedFields.filter(
        (field) => !(field in itemObj)
      );

      if (missingFields.length === 0) {
        console.log(
          "SUCCESS: All new fields are present in the database document."
        );
        console.log("Sample item keys:", Object.keys(itemObj));
      } else {
        console.log("WARNING: Some fields are missing:", missingFields);
      }
    } else {
      console.log("No items found in the database.");
    }

    mongoose.connection.close();
  } catch (error) {
    console.error("Error verifying schema:", error);
    process.exit(1);
  }
};

verifySchema();
