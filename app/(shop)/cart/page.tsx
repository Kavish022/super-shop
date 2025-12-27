import Link from "next/link";
import Cart from "@/components/Cart";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

const CartPage = () => {
  // TODO: Integrate with cart context when implementing state management
  const cartItems: CartItem[] = [];
  const totalAmount = 0;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">Your cart is empty.</p>
          <Link href="/shop/products" className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-blue-600">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <Cart items={cartItems} />
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Total: ${totalAmount.toFixed(2)}</h2>
            <Link href="/shop/checkout" className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-blue-600">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;