import Link from "next/link";

export const metadata = {
  title: "Admin Dashboard | SuperCom",
  description: "Admin dashboard for managing SuperCom",
};

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">Welcome to the admin dashboard. Here you can manage the eCommerce site.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total Products</h3>
          <p className="text-3xl font-bold text-primary">4</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total Orders</h3>
          <p className="text-3xl font-bold text-primary">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-primary">$0.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-primary">0</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/admin/products"
            className="p-4 border-2 border-primary rounded-lg hover:bg-blue-50 transition text-center"
          >
            <h3 className="font-bold text-primary mb-2">Manage Products</h3>
            <p className="text-gray-600 text-sm">Add, edit, or delete products</p>
          </Link>
          <Link
            href="/shop/products"
            className="p-4 border-2 border-secondary rounded-lg hover:bg-green-50 transition text-center"
          >
            <h3 className="font-bold text-secondary mb-2">View Shop</h3>
            <p className="text-gray-600 text-sm">See the store from customer perspective</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;