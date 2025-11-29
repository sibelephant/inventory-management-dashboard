import mongoose, { Schema, Document } from "mongoose";

export interface IInventoryItem extends Document {
  name: string;
  productId: string;
  category: string;
  buyingPrice: number;
  quantity: number;
  unit: string;
  expiryDate: Date;
  thresholdValue: number;
  availability: string;
  image?: string;
  supplierName?: string;
  supplierContact?: string;
  stockLocations?: { storeName: string; stockInHand: number }[];
}

const InventoryItemSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    productId: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    buyingPrice: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 0 },
    unit: { type: String, required: true },
    expiryDate: { type: Date, required: true },
    thresholdValue: { type: Number, default: 10 },
    availability: {
      type: String,
      enum: ["In- stock", "Out of stock", "Low stock"],
      default: "In- stock",
    },
    image: { type: String },
    supplierName: { type: String },
    supplierContact: { type: String },
    stockLocations: [
      {
        storeName: { type: String },
        stockInHand: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IInventoryItem>(
  "InventoryItem",
  InventoryItemSchema
);
