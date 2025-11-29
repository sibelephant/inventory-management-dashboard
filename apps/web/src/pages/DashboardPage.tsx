import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  Coins,
  TrendingUp,
  Package,
  ShoppingCart,
  Users,
  List,
} from "lucide-react";
import Layout from "../components/Layout";

const salesData = [
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
];

const orderData = [
  { name: "Jan", ordered: 3800, delivered: 3200 },
  { name: "Feb", ordered: 2800, delivered: 3800 },
  { name: "Mar", ordered: 2500, delivered: 3500 },
  { name: "Apr", ordered: 1500, delivered: 3600 },
  { name: "May", ordered: 2300, delivered: 3400 },
];

const topSellingStock = [
  { name: "Surf Excel", sold: 30, remaining: 12, price: 100 },
  { name: "Rin", sold: 21, remaining: 15, price: 207 },
  { name: "Parle G", sold: 19, remaining: 17, price: 105 },
];

const lowQuantityStock = [
  {
    name: "Tata Salt",
    remaining: 10,
    image: "https://m.media-amazon.com/images/I/51Zz1yE-E+L._AC_UL320_.jpg",
  },
  {
    name: "Lays",
    remaining: 15,
    image: "https://m.media-amazon.com/images/I/71tH-sK5WXL._AC_UL320_.jpg",
  },
  {
    name: "Lays",
    remaining: 15,
    image: "https://m.media-amazon.com/images/I/71tH-sK5WXL._AC_UL320_.jpg",
  },
];

const DashboardPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        {/* Sales Overview */}
        <div className="col-span-8 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Sales Overview
          </h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="p-2 bg-blue-100 rounded-full mb-2">
                <Coins className="text-blue-600" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">₹ 832</span>
              <span className="text-xs text-gray-500">Sales</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 bg-purple-100 rounded-full mb-2">
                <TrendingUp className="text-purple-600" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">₹ 18,300</span>
              <span className="text-xs text-gray-500">Revenue</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 bg-orange-100 rounded-full mb-2">
                <TrendingUp className="text-orange-600" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">₹ 868</span>
              <span className="text-xs text-gray-500">Profit</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 bg-green-100 rounded-full mb-2">
                <Coins className="text-green-600" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">₹ 17,432</span>
              <span className="text-xs text-gray-500">Cost</span>
            </div>
          </div>
        </div>

        {/* Inventory Summary */}
        <div className="col-span-4 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Inventory Summary
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center border-r border-gray-100">
              <div className="p-2 bg-orange-100 rounded-full mb-2">
                <Package className="text-orange-600" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">868</span>
              <span className="text-xs text-gray-500">Quantity in Hand</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 bg-purple-100 rounded-full mb-2">
                <Package className="text-purple-600" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">200</span>
              <span className="text-xs text-gray-500">To be received</span>
            </div>
          </div>
        </div>

        {/* Purchase Overview */}
        <div className="col-span-8 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Purchase Overview
          </h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="p-2 bg-blue-100 rounded-full mb-2">
                <ShoppingCart className="text-blue-600" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">82</span>
              <span className="text-xs text-gray-500">Purchase</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 bg-green-100 rounded-full mb-2">
                <Coins className="text-green-600" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">₹ 13,573</span>
              <span className="text-xs text-gray-500">Cost</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 bg-purple-100 rounded-full mb-2">
                <ShoppingCart className="text-purple-600" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">5</span>
              <span className="text-xs text-gray-500">Cancel</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 bg-orange-100 rounded-full mb-2">
                <Coins className="text-orange-600" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">₹ 17,432</span>
              <span className="text-xs text-gray-500">Return</span>
            </div>
          </div>
        </div>

        {/* Product Summary */}
        <div className="col-span-4 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Product Summary
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center border-r border-gray-100">
              <div className="p-2 bg-blue-100 rounded-full mb-2">
                <Users className="text-blue-600" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">31</span>
              <span className="text-xs text-gray-500">Number of Suppliers</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 bg-purple-100 rounded-full mb-2">
                <List className="text-purple-600" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-800">21</span>
              <span className="text-xs text-gray-500">
                Number of Categories
              </span>
            </div>
          </div>
        </div>

        {/* Sales & Purchase Chart */}
        <div className="col-span-8 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Sales & Purchase
            </h3>
            <button className="px-3 py-1 border border-gray-200 rounded-md text-sm text-gray-600 flex items-center gap-2">
              Weekly
            </button>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData} barSize={10}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="purchase"
                  fill="#818cf8"
                  radius={[4, 4, 0, 0]}
                  name="Purchase"
                />
                <Bar
                  dataKey="sales"
                  fill="#4ade80"
                  radius={[4, 4, 0, 0]}
                  name="Sales"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Summary Chart */}
        <div className="col-span-4 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Order Summary
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={orderData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="ordered"
                  stroke="#d97706"
                  strokeWidth={2}
                  dot={false}
                  name="Ordered"
                />
                <Line
                  type="monotone"
                  dataKey="delivered"
                  stroke="#60a5fa"
                  strokeWidth={2}
                  dot={false}
                  name="Delivered"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Selling Stock */}
        <div className="col-span-8 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Top Selling Stock
            </h3>
            <button className="text-blue-600 text-sm font-medium">
              See All
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Sold Quantity</th>
                <th className="pb-3 font-medium">Remaining Quantity</th>
                <th className="pb-3 font-medium">Price</th>
              </tr>
            </thead>
            <tbody>
              {topSellingStock.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-50 last:border-0"
                >
                  <td className="py-3 text-gray-800">{item.name}</td>
                  <td className="py-3 text-gray-600">{item.sold}</td>
                  <td className="py-3 text-gray-600">{item.remaining}</td>
                  <td className="py-3 text-gray-800">₹ {item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Low Quantity Stock */}
        <div className="col-span-4 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Low Quantity Stock
            </h3>
            <button className="text-blue-600 text-sm font-medium">
              See All
            </button>
          </div>
          <div className="space-y-4">
            {lowQuantityStock.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    Remaining Quantity : {item.remaining} Packet
                  </p>
                </div>
                <span className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded-full font-medium">
                  Low
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
