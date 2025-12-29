'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { fetchProducts, type Product } from "@/lib/api";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Welcome to SuperCom
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Discover high-quality products with fast and secure checkout.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/products"
              className="rounded-md bg-blue-600 px-8 py-3 text-sm font-medium hover:bg-blue-500 transition"
            >
              Start Shopping
            </Link>
            <Link
              href="/products"
              className="rounded-md border border-white/20 px-8 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">
            Featured Products
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Our most popular items, hand-picked for you.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-64 rounded-lg bg-gray-100 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Ready to explore more?
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Browse our full collection and find what fits you best.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-block rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-500 transition"
          >
            View All Products
          </Link>
        </div>
      </section>

    </main>
  );
}
