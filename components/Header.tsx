import Link from "next/link";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-white hover:text-blue-400 transition"
          >
            SuperCom
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-sm text-gray-300 hover:text-white transition">
              Shop
            </Link>
            <Link href="/cart" className="text-sm text-gray-300 hover:text-white transition">
              Cart
            </Link>
            <Link href="/admin/products" className="text-sm text-gray-300 hover:text-white transition">
              Admin
            </Link>
          </nav>

          {/* Auth Actions */}
          <div className="flex items-center gap-4">
            <SignedOut>
              <Link
                href="/auth/login"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition"
              >
                Sign Up
              </Link>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Open menu"
            >
              <svg
                className="h-5 w-5"
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
      </div>
    </header>
  );
};

export default Header;
