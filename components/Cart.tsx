import React from "react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartProps {
  items?: CartItem[];
}

const Cart: React.FC<CartProps> = ({ items = [] }) => {
  // TODO: Integrate with cart context when implementing state management
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  {item.image && <img src={item.image} alt={item.title} />}
                  <div>
                    <h2>{item.title}</h2>
                    <p>${item.price.toFixed(2)}</p>
                    <p>Qty: {item.quantity}</p>
                    <button>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalAmount.toFixed(2)}</h2>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;