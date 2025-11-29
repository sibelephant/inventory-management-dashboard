export interface Product {
  _id?: string; // Optional because it's not present when creating a new product
  name: string;
  productId: string;
  category: string;
  buyingPrice: number;
  quantity: number;
  unit: string;
  expiryDate: string; // Date is usually string in JSON response
  thresholdValue: number;
  availability: string;
  image?: string;
  supplierName?: string;
  supplierContact?: string;
  stockLocations?: { storeName: string; stockInHand: number }[];
  createdAt?: string;
  updatedAt?: string;
}
