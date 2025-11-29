import { useState, useEffect } from "react";
import { Filter, Download, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import AddProductModal from "../components/AddProductModal";
import type { Product } from "../types";

const InventoryPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/inventory");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  const handleAddProduct = async (productData: Product) => {
    try {
      const response = await fetch("http://localhost:3001/api/inventory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        fetchInventory();
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case "In- stock":
        return "text-green-600";
      case "Out of stock":
        return "text-red-600";
      case "Low stock":
        return "text-orange-500";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Layout>
      {/* Overall Inventory */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Overall Inventory
        </h3>
        <div className="grid grid-cols-4 gap-8">
          <div className="border-r border-gray-100 pr-8">
            <h4 className="text-blue-600 font-medium mb-2">Categories</h4>
            <div className="text-2xl font-bold text-gray-800 mb-1">14</div>
            <div className="text-sm text-gray-500">Last 7 days</div>
          </div>
          <div className="border-r border-gray-100 pr-8">
            <h4 className="text-orange-500 font-medium mb-2">Total Products</h4>
            <div className="flex justify-between items-end mb-1">
              <div className="text-2xl font-bold text-gray-800">
                {items.length}
              </div>
              <div className="text-2xl font-bold text-gray-800">₹25000</div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Last 7 days</span>
              <span>Revenue</span>
            </div>
          </div>
          <div className="border-r border-gray-100 pr-8">
            <h4 className="text-purple-600 font-medium mb-2">Top Selling</h4>
            <div className="flex justify-between items-end mb-1">
              <div className="text-2xl font-bold text-gray-800">5</div>
              <div className="text-2xl font-bold text-gray-800">₹2500</div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Last 7 days</span>
              <span>Cost</span>
            </div>
          </div>
          <div>
            <h4 className="text-red-500 font-medium mb-2">Low Stocks</h4>
            <div className="flex justify-between items-end mb-1">
              <div className="text-2xl font-bold text-gray-800">
                {items.filter((i) => i.availability === "Low stock").length}
              </div>
              <div className="text-2xl font-bold text-gray-800">
                {items.filter((i) => i.availability === "Out of stock").length}
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Ordered</span>
              <span>Not in stock</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Products</h3>
          <div className="flex gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700"
            >
              <Plus size={20} />
              Add Product
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 font-medium flex items-center gap-2 hover:bg-gray-50">
              <Filter size={20} />
              Filters
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 font-medium flex items-center gap-2 hover:bg-gray-50">
              <Download size={20} />
              Download all
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
                <th className="pb-4 font-medium">Products</th>
                <th className="pb-4 font-medium">Buying Price</th>
                <th className="pb-4 font-medium">Quantity</th>
                <th className="pb-4 font-medium">Threshold Value</th>
                <th className="pb-4 font-medium">Expiry Date</th>
                <th className="pb-4 font-medium">Availability</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-pointer"
                  onClick={() => navigate(`/inventory/${item._id}`)}
                >
                  <td className="py-4 text-gray-800 font-medium">
                    {item.name}
                  </td>
                  <td className="py-4 text-gray-600">₹{item.buyingPrice}</td>
                  <td className="py-4 text-gray-600">
                    {item.quantity} {item.unit}
                  </td>
                  <td className="py-4 text-gray-600">
                    {item.thresholdValue} {item.unit}
                  </td>
                  <td className="py-4 text-gray-600">
                    {new Date(item.expiryDate).toLocaleDateString()}
                  </td>
                  <td
                    className={`py-4 font-medium ${getAvailabilityColor(
                      item.availability
                    )}`}
                  >
                    {item.availability}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 text-sm font-medium hover:bg-gray-50">
            Previous
          </button>
          <span className="text-sm text-gray-600">Page 1 of 10</span>
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 text-sm font-medium hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProduct}
      />
    </Layout>
  );
};

export default InventoryPage;
