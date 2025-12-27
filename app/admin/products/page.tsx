'use client';

import React, { useState, useEffect } from "react";
import { fetchProducts, createProduct, updateProduct, deleteProduct, type Product } from "@/lib/api";

const AdminProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to load products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.price) {
      alert("Title and price are required");
      return;
    }

    try {
      if (editingId) {
        await updateProduct(editingId, {
          title: formData.title,
          price: parseFloat(formData.price),
          image: formData.image || "https://via.placeholder.com/300x200?text=Product",
          description: formData.description,
        });
      } else {
        await createProduct({
          title: formData.title,
          price: parseFloat(formData.price),
          image: formData.image || "https://via.placeholder.com/300x200?text=Product",
          description: formData.description,
        });
      }
      setFormData({ title: "", price: "", image: "", description: "" });
      setEditingId(null);
      setShowForm(false);
      loadProducts();
    } catch (error) {
      console.error("Failed to save product:", error);
    }
  };

  const handleEdit = (product: Product) => {
    setFormData({
      title: product.title,
      price: product.price.toString(),
      image: product.image,
      description: product.description || "",
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        loadProducts();
      } catch (error) {
        console.error("Failed to delete product:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-gray-600">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Products</h1>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setFormData({ title: "", price: "", image: "", description: "" });
          }}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? "Cancel" : "Add New Product"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="https://via.placeholder.com/300x200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                rows={3}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {editingId ? "Update Product" : "Create Product"}
          </button>
        </form>
      )}

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products yet</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Product Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {product.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                    {product.description || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminProductsPage;