import { Request, Response } from "express";
import InventoryItem from "../models/InventoryItem";

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    // In a real app, these would be calculated from Order and Purchase models
    // For now, we'll return the structure expected by the frontend

    const totalInventory = await InventoryItem.countDocuments();
    const lowStockCount = await InventoryItem.countDocuments({
      availability: "Low stock",
    });
    const outOfStockCount = await InventoryItem.countDocuments({
      availability: "Out of stock",
    });

    // Mock data for charts and summaries
    const stats = {
      salesOverview: {
        sales: 832,
        revenue: 18300,
        profit: 868,
        cost: 17432,
      },
      inventorySummary: {
        quantityInHand: 868,
        toBeReceived: 200,
      },
      purchaseOverview: {
        purchase: 82,
        cost: 13573,
        cancel: 5,
        return: 17432,
      },
      productSummary: {
        suppliers: 31,
        categories: 21,
      },
      salesData: [
        { name: "Jan", purchase: 55000, sales: 50000 },
        { name: "Feb", purchase: 58000, sales: 48000 },
        { name: "Mar", purchase: 45000, sales: 52000 },
        { name: "Apr", purchase: 38000, sales: 44000 },
        { name: "May", purchase: 44000, sales: 47000 },
        { name: "Jun", purchase: 29000, sales: 42000 },
        { name: "Jul", purchase: 55000, sales: 50000 },
        { name: "Aug", purchase: 45000, sales: 43000 },
        { name: "May", purchase: 45000, sales: 44000 },
        { name: "Jun", purchase: 38000, sales: 44000 },
      ],
      orderData: [
        { name: "Jan", ordered: 3800, delivered: 3200 },
        { name: "Feb", ordered: 2800, delivered: 3800 },
        { name: "Mar", ordered: 2500, delivered: 3500 },
        { name: "Apr", ordered: 1500, delivered: 3600 },
        { name: "May", ordered: 2300, delivered: 3400 },
      ],
      topSellingStock: [
        { name: "Surf Excel", sold: 30, remaining: 12, price: 100 },
        { name: "Rin", sold: 21, remaining: 15, price: 207 },
        { name: "Parle G", sold: 19, remaining: 17, price: 105 },
      ],
      lowQuantityStock: [
        {
          name: "Tata Salt",
          remaining: 10,
          image:
            "https://m.media-amazon.com/images/I/51Zz1yE-E+L._AC_UL320_.jpg",
        },
        {
          name: "Lays",
          remaining: 15,
          image:
            "https://m.media-amazon.com/images/I/71tH-sK5WXL._AC_UL320_.jpg",
        },
        {
          name: "Lays",
          remaining: 15,
          image:
            "https://m.media-amazon.com/images/I/71tH-sK5WXL._AC_UL320_.jpg",
        },
      ],
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard stats", error });
  }
};
