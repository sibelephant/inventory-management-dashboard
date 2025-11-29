import mongoose, { Schema, Document } from "mongoose";

export interface IInventoryItem extends Document {
  name: string;
  quantity: number;
  buyingPrice: number;
  sellingPrice?: number;
  category: string;
  thresholdValue: number;
  expiryDate?: Date;
  availability: string;
}

const InventoryItemSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    buyingPrice: { type: Number, required: true },
    sellingPrice: { type: Number },
    category: { type: String, required: true },
    thresholdValue: { type: Number, default: 10 },
    expiryDate: { type: Date },
    availability: {
      type: String,
      enum: ["In- stock", "Out of stock", "Low stock"],
      default: "In- stock",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IInventoryItem>(
  "InventoryItem",
  InventoryItemSchema
);
