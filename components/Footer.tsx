import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12">

        {/* Top Section */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              SuperCom
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              A modern e-commerce platform delivering quality products with fast and secure checkout.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Shop
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-white transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-white transition">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Account
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/auth/login" className="hover:text-white transition">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/auth/register" className="hover:text-white transition">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>kavishbhatt022@gmail.com</li>
              <li>1-800-SUPERCOM</li>
              <li>Sup Comm</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs">
            © {new Date().getFullYear()} SuperCom. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
