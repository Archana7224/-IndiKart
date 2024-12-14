import React, { useContext, useMemo } from 'react';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { cart = [], updateCart, removeFromCart } = useContext(ShopContext);

  // Calculate the total using useMemo
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0),
    [cart]
  );

  const handleQuantityChange = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCart(productId, quantity);
    }
  };

  if (cart.length === 0) {
    return <p className="p-6 text-gray-600">Your cart is empty!</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 p-4 border rounded-md"
          >
            <img
              src={item.image || '/placeholder-image.png'}
              alt={item.name || 'Unnamed Product'}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h2 className="text-lg font-bold">{item.name || 'Unnamed Product'}</h2>
              <p className="text-sm text-gray-600">
                ${item.price !== undefined ? item.price.toFixed(2) : '0.00'}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <p>{item.quantity || 0}</p>
                  <button
                    className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p className="text-xl font-bold">
          Total: ${total.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
