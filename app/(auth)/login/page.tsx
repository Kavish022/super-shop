'use client';

import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    // Simulate a login request
    console.log("Logging in with:", { email, password });
    // Reset form and error
    setEmail("");
    setPassword("");
    setError("");
    // TODO: Implement actual authentication
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
        {error && <p className="text-red-500 mb-4 text-center bg-red-50 p-3 rounded">{error}</p>}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-primary hover:underline font-medium">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;