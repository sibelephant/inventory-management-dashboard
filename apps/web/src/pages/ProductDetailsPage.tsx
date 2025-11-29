import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Edit, Download } from "lucide-react";
import Layout from "../components/Layout";

interface InventoryItem {
  _id: string;
  name: string;
  productId: string;
  category: string;
  buyingPrice: number;
  quantity: number;
  unit: string;
  expiryDate: string;
  thresholdValue: number;
  availability: string;
  image?: string;
  supplierName?: string;
  supplierContact?: string;
  stockLocations?: { storeName: string; stockInHand: number }[];
}

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<InventoryItem | null>(null);
  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/inventory/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  if (!product)
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );

  return (
    <Layout>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h2>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 font-medium flex items-center gap-2 hover:bg-gray-50">
              <Edit size={20} />
              Edit
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 font-medium flex items-center gap-2 hover:bg-gray-50">
              <Download size={20} />
              Download
            </button>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-6">
          <div className="flex gap-8">
            {["Overview", "Purchases", "Adjustments", "History"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-medium ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            {/* Primary Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Primary Details
              </h3>
              <div className="grid grid-cols-2 gap-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Product name</p>
                  <p className="text-gray-800 font-medium">{product.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Product ID</p>
                  <p className="text-gray-800 font-medium">
                    {product.productId}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Product category</p>
                  <p className="text-gray-800 font-medium">
                    {product.category}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Expiry Date</p>
                  <p className="text-gray-800 font-medium">
                    {new Date(product.expiryDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Threshold Value</p>
                  <p className="text-gray-800 font-medium">
                    {product.thresholdValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Supplier Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Supplier Details
              </h3>
              <div className="grid grid-cols-2 gap-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Supplier name</p>
                  <p className="text-gray-800 font-medium">
                    {product.supplierName || "Ronald Martin"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Contact Number</p>
                  <p className="text-gray-800 font-medium">
                    {product.supplierContact || "98789 86757"}
                  </p>
                </div>
              </div>
            </div>

            {/* Stock Locations */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Stock Locations
              </h3>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
                    <th className="pb-3 font-medium">Store Name</th>
                    <th className="pb-3 font-medium text-right">
                      Stock in hand
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.stockLocations?.map((loc, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-50 last:border-0"
                    >
                      <td className="py-3 text-gray-600">{loc.storeName}</td>
                      <td className="py-3 text-blue-600 font-medium text-right">
                        {loc.stockInHand}
                      </td>
                    </tr>
                  )) || (
                    <>
                      <tr className="border-b border-gray-50">
                        <td className="py-3 text-gray-600">Sulur Branch</td>
                        <td className="py-3 text-blue-600 font-medium text-right">
                          15
                        </td>
                      </tr>
                      <tr className="border-b border-gray-50">
                        <td className="py-3 text-gray-600">
                          Singanallur Branch
                        </td>
                        <td className="py-3 text-blue-600 font-medium text-right">
                          19
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex items-center justify-center min-h-[200px]">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-48 object-contain"
                />
              ) : (
                <div className="text-center">
                  <img
                    src="https://m.media-amazon.com/images/I/81gDT8Kz8PL._SL1500_.jpg"
                    alt="Product Placeholder"
                    className="max-w-full max-h-48 object-contain mx-auto mb-2"
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Opening Stock</span>
                <span className="font-medium text-gray-800">40</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Remaining Stock</span>
                <span className="font-medium text-gray-800">
                  {product.quantity}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">On the way</span>
                <span className="font-medium text-gray-800">15</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Threshold value</span>
                <span className="font-medium text-gray-800">
                  {product.thresholdValue}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;
