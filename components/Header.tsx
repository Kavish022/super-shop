import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-blue-400 transition">
            SuperCom
          </Link>
          
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li>
                <Link href="/shop/products" className="hover:text-primary transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/shop/cart" className="hover:text-primary transition">
                  Cart
                </Link>
              </li>
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
              <li>
                <Link href="/admin/products" className="hover:text-primary transition">
                  Admin
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button placeholder */}
          <button className="md:hidden text-white hover:text-primary transition">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;