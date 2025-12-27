/**
 * SuperCom E-commerce Application
 *
 * A modern Next.js e-commerce application with the following features:
 * - Shop for products
 * - Admin panel for product management
 * - User authentication (login/register)
 * - Shopping cart functionality
 * - Responsive design with Tailwind CSS
 *
 * ## Directory Structure
 *
 * ```
 * /app              - Next.js App Router pages
 * /components       - Reusable React components
 * /lib              - Utility functions and API mocks
 * /public           - Static assets
 * ```
 *
 * ## Routing Structure
 *
 * - `/` - Home page
 * - `/shop/products` - Customer product listing
 * - `/shop/products/[id]` - Product details
 * - `/shop/cart` - Shopping cart
 * - `/shop/checkout` - Checkout page
 * - `/admin/products` - Admin product management
 * - `/admin/dashboard` - Admin dashboard
 * - `/auth/login` - Login page
 * - `/auth/register` - Registration page
 *
 * ## Getting Started
 *
 * 1. Install dependencies:
 *    ```bash
 *    npm install
 *    ```
 *
 * 2. Run the development server:
 *    ```bash
 *    npm run dev
 *    ```
 *
 * 3. Open [http://localhost:3000](http://localhost:3000) in your browser
 *
 * ## Features Implemented
 *
 * - ✅ Routing conflict fixed (admin and shop products separated)
 * - ✅ Mock API with CRUD operations
 * - ✅ Product listing and management
 * - ✅ Tailwind CSS integration
 * - ✅ TypeScript support
 * - ✅ Responsive design
 * - ✅ Improved component structure
 *
 * ## Future Enhancements
 *
 * - [ ] Real backend API integration
 * - [ ] Database setup (MongoDB/PostgreSQL)
 * - [ ] User authentication (NextAuth.js)
 * - [ ] Payment processing (Stripe/PayPal)
 * - [ ] Order management system
 * - [ ] Inventory tracking
 * - [ ] Search and filtering
 * - [ ] Product reviews and ratings
 * - [ ] Email notifications
 * - [ ] Analytics and reporting
 *
 * ## Development
 *
 * - Technologies: Next.js, React, TypeScript, Tailwind CSS
 * - Node Version: 18+ recommended
 * - Package Manager: npm (or yarn/pnpm)
 */

// This file serves as project documentation
export const projectInfo = {
  name: "SuperCom",
  version: "1.0.0",
  description: "E-commerce application built with Next.js",
};
