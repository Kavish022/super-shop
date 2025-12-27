import React from "react";
import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/lib/api";

export const metadata = {
  title: "Products | SuperCom",
  description: "Browse our collection of products",
};

const ShopProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <main className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Products</h1>
        <p className="text-gray-600">
          Browse our collection of {products.length} products
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default ShopProductsPage;