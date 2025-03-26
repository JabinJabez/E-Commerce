import React from "react";
import { useCart } from "./CartContext"; // Import the useCart hook

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center mt-4">Your cart is empty.</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-2">
              <span className="text-lg font-semibold">{item.prodName}</span>
              <span className="text-blue-600">₹{item.amount}</span>
              <button
                onClick={() => removeFromCart(item.prodId)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
