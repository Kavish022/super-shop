'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, Heart, Facebook, X, MessageCircle, ChevronDown } from 'lucide-react';
import { fetchProduct, Product } from '@/lib/api';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProduct(params.id);
        setProduct(data);
      } catch (error) {
        console.error('Failed to load product:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProduct();
  }, [params.id]);

  if (isLoading) {
    return (
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden min-h-screen flex items-center justify-center">
        <p className="text-white">Loading product...</p>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden min-h-screen flex flex-col items-center justify-center">
        <p className="text-white text-xl mb-4">Product not found</p>
        <Link href="/products" className="text-indigo-400 hover:text-indigo-300">
          ← Back to Products
        </Link>
      </section>
    );
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.title} to cart`);
    // TODO: Implement cart context
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <Link href="/products" className="text-indigo-400 hover:text-indigo-300 mb-8 inline-block">
          ← Back to Products
        </Link>
        
        <div className="lg:w-4/5 mx-auto flex flex-wrap gap-10">
          {/* Image Section */}
          <img 
            alt={product.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded border border-gray-800" 
            src={product.image}
          />

          {/* Content Section */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm tracking-widest text-gray-500 uppercase">Product</h2>
            <h1 className="text-white text-3xl font-medium mb-1">{product.title}</h1>
            
            {/* Rating & Socials */}
            <div className="flex mb-4 items-center">
              <span className="flex items-center text-indigo-400">
                {[...Array(4)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                <Star size={16} className="text-gray-600" />
                <span className="ml-3 text-gray-500">0 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 gap-2">
                <Facebook size={20} className="cursor-pointer hover:text-white" />
                <X size={20} className="cursor-pointer hover:text-white" />
                <MessageCircle size={20} className="cursor-pointer hover:text-white" />
              </span>
            </div>

            <p className="leading-relaxed mb-6">{product.description || 'High-quality product with excellent craftsmanship.'}</p>

            {/* Selection Area */}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5 gap-6">
              <div className="flex items-center gap-1">
                <span className="mr-3">Color</span>
                <button className="w-6 h-6 rounded-full border-2 border-gray-800 focus:ring-2 ring-white bg-black" />
                <button className="w-6 h-6 rounded-full border-2 border-gray-800 focus:ring-2 ring-white bg-gray-700" />
                <button className="w-6 h-6 rounded-full border-2 border-gray-800 focus:ring-2 ring-white bg-indigo-500" />
              </div>
              
              <div className="relative flex items-center">
                <span className="mr-3">Size</span>
                <select className="rounded border border-gray-700 bg-transparent py-2 pl-3 pr-10 text-white focus:ring-2 focus:ring-indigo-900 outline-none appearance-none">
                  {['SM', 'M', 'L', 'XL'].map(size => <option key={size}>{size}</option>)}
                </select>
                <ChevronDown className="absolute right-2 pointer-events-none" size={16} />
              </div>

              <div className="flex items-center">
                <span className="mr-3">Qty</span>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                  className="w-16 rounded border border-gray-700 bg-transparent py-2 px-3 text-white focus:ring-2 focus:ring-indigo-900 outline-none"
                />
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="flex items-center">
              <span className="text-2xl font-medium text-white">${product.price.toFixed(2)}</span>
              <button
                onClick={handleAddToCart}
                className="flex ml-auto text-white bg-indigo-500 py-2 px-8 hover:bg-indigo-600 rounded transition-colors"
              >
                Add to Cart
              </button>
              <button className="ml-4 p-2 rounded-full bg-gray-800 text-gray-500 hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
