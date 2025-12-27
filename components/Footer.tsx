import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SuperCom</h3>
            <p className="text-sm">
              Your trusted online store for quality products and excellent customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop/products" className="hover:text-primary transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop/cart" className="hover:text-primary transition">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/shop/checkout" className="hover:text-primary transition">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-white font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/auth/login" className="hover:text-primary transition">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/auth/register" className="hover:text-primary transition">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@supercom.com</li>
              <li>Phone: 1-800-SUPERCOM</li>
              <li>Address: 123 Commerce St, Tech City</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} SuperCom. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="#" className="hover:text-primary transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;