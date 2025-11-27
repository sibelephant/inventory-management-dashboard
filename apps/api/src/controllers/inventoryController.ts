import { Request, Response } from "express";
import InventoryItem from "../models/InventoryItem";

export const getInventory = async (req: Request, res: Response) => {
  try {
    const items = await InventoryItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching inventory", error });
  }
};

export const createInventoryItem = async (req: Request, res: Response) => {
  try {
    const newItem = new InventoryItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: "Error creating item", error });
  }
};
