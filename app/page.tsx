'use client';

import React from "react";
import ProductCard from "@/components/ProductCard";
import { fetchProducts, type Product } from "@/lib/api";

export default function Home() {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to SuperCom</h1>
          <p className="text-xl md:text-2xl mb-8">Discover amazing products at great prices</p>
          <a href="/shop/products" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Start Shopping
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto p-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
        <p className="text-gray-600 mb-8">Check out our best-selling items</p>
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Find More?</h2>
          <a href="/shop/products" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Browse All Products
          </a>
        </div>
      </section>
    </main>
  );
}