import { Filter, Download, Plus } from "lucide-react";
import Layout from "../components/Layout";

const inventoryData = [
  {
    name: "Maggi",
    buyingPrice: 430,
    quantity: 43,
    threshold: 12,
    expiry: "11/12/22",
    availability: "In- stock",
  },
  {
    name: "Bru",
    buyingPrice: 257,
    quantity: 22,
    threshold: 12,
    expiry: "21/12/22",
    availability: "Out of stock",
  },
  {
    name: "Red Bull",
    buyingPrice: 405,
    quantity: 36,
    threshold: 9,
    expiry: "5/12/22",
    availability: "In- stock",
  },
  {
    name: "Bourn Vita",
    buyingPrice: 502,
    quantity: 14,
    threshold: 6,
    expiry: "8/12/22",
    availability: "Out of stock",
  },
  {
    name: "Horlicks",
    buyingPrice: 530,
    quantity: 5,
    threshold: 5,
    expiry: "9/1/23",
    availability: "In- stock",
  },
  {
    name: "Harpic",
    buyingPrice: 605,
    quantity: 10,
    threshold: 5,
    expiry: "9/1/23",
    availability: "In- stock",
  },
  {
    name: "Ariel",
    buyingPrice: 408,
    quantity: 23,
    threshold: 7,
    expiry: "15/12/23",
    availability: "Out of stock",
  },
  {
    name: "Scotch Brite",
    buyingPrice: 359,
    quantity: 43,
    threshold: 8,
    expiry: "6/6/23",
    availability: "In- stock",
  },
  {
    name: "Coca cola",
    buyingPrice: 205,
    quantity: 41,
    threshold: 10,
    expiry: "11/11/22",
    availability: "Low stock",
  },
];

const InventoryPage = () => {
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
              <div className="text-2xl font-bold text-gray-800">868</div>
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
              <div className="text-2xl font-bold text-gray-800">12</div>
              <div className="text-2xl font-bold text-gray-800">2</div>
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
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700">
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
              {inventoryData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50"
                >
                  <td className="py-4 text-gray-800 font-medium">
                    {item.name}
                  </td>
                  <td className="py-4 text-gray-600">₹{item.buyingPrice}</td>
                  <td className="py-4 text-gray-600">
                    {item.quantity} Packets
                  </td>
                  <td className="py-4 text-gray-600">
                    {item.threshold} Packets
                  </td>
                  <td className="py-4 text-gray-600">{item.expiry}</td>
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
    </Layout>
  );
};

export default InventoryPage;
