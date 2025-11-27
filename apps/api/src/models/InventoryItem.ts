import mongoose, { Schema, Document } from "mongoose";

export interface IInventoryItem extends Document {
  name: string;
  quantity: number;
  price: number;
  category: string;
}

const InventoryItemSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IInventoryItem>(
  "InventoryItem",
  InventoryItemSchema
);
