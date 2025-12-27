'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ShippingInfo {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardNumber: string;
}

const CheckoutPage = () => {
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout logic here (e.g., API call to process payment)
    console.log('Shipping Info:', shippingInfo);
    // TODO: Implement actual payment processing
  };

  return (
    <div className="container mx-auto p-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow">
            {/* Shipping Information */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Information</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={shippingInfo.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={shippingInfo.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={shippingInfo.state}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Zip Code</label>
              <input
                type="text"
                name="zip"
                value={shippingInfo.zip}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Payment Information */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Information</h2>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={shippingInfo.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-blue-600 transition"
            >
              Complete Purchase
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-8 rounded-lg shadow h-fit">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-4 mb-6 border-b pb-4">
            {/* TODO: Add order items here */}
            <p className="text-gray-600">No items in order</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-lg font-semibold border-t pt-4">
              <span>Total:</span>
              <span>$0.00</span>
            </div>
          </div>
          <Link
            href="/shop/cart"
            className="mt-4 inline-block text-primary hover:underline"
          >
            ← Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;