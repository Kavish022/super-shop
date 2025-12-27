import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop/products">Products</Link>
        </li>
        <li>
          <Link href="/shop/cart">Cart</Link>
        </li>
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
        <li>
          <Link href="/auth/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;